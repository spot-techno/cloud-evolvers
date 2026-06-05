import { Hono, type Context, type ExecutionContext } from 'hono';

import * as adminContacts from '../functions/api/admin/contacts';
import * as adminLeads from '../functions/api/admin/leads';
import * as adminEnrollmentById from '../functions/api/admin/enrollments/[id]';
import * as adminEnrollments from '../functions/api/admin/enrollments';
import * as adminTrainingSessionById from '../functions/api/admin/training-sessions/[id]';
import * as adminTrainingSessions from '../functions/api/admin/training-sessions';
import * as catalog from '../functions/api/catalog';
import * as enrollments from '../functions/api/enrollments';
import * as health from '../functions/api/health';
import * as monitor from '../functions/api/monitor';
import * as submitConsultation from '../functions/api/submit-consultation';
import * as trainingSessionById from '../functions/api/training-sessions/[id]';
import * as trainingSessions from '../functions/api/training-sessions';
import type { BookingEnv } from '../functions/api/_lib/db-types';

type Env = BookingEnv & {
  ASSETS: Fetcher;
  NODE_ENV: string;
  VITE_SHOW_CONSTRUCTION_BANNER: string;
  VITE_ENVIRONMENT?: string;
  VITE_SITE_URL?: string;
};

type HonoEnv = {
  Bindings: Env;
};

type PagesContext = {
  request: Request;
  env: Env;
  params: Record<string, string>;
  waitUntil: (promise: Promise<unknown>) => void;
};

type PagesHandler = (context: PagesContext) => Response | Promise<Response>;

const app = new Hono<HonoEnv>();

function pagesContext(
  c: Context<HonoEnv>,
  params: Record<string, string> = {},
): PagesContext {
  return {
    request: c.req.raw,
    env: c.env,
    params,
    waitUntil: (promise) => c.executionCtx.waitUntil(promise),
  };
}

function callPagesHandler(
  handler: PagesHandler,
  params?: (c: Context<HonoEnv>) => Record<string, string>,
) {
  return (c: Context<HonoEnv>) => handler(pagesContext(c, params?.(c) ?? {}));
}

function idParam(c: Context<HonoEnv>) {
  return { id: c.req.param('id') };
}

app.options('/api/health', callPagesHandler(health.onRequestOptions));
app.get('/api/health', callPagesHandler(health.onRequestGet));

app.options('/api/catalog', callPagesHandler(catalog.onRequestOptions));
app.get('/api/catalog', callPagesHandler(catalog.onRequestGet));

app.options('/api/monitor', callPagesHandler(monitor.onRequestOptions));
app.get('/api/monitor', callPagesHandler(monitor.onRequestGet));

app.options('/api/training-sessions', callPagesHandler(trainingSessions.onRequestOptions));
app.get('/api/training-sessions', callPagesHandler(trainingSessions.onRequestGet));

app.options('/api/training-sessions/:id', callPagesHandler(trainingSessionById.onRequestOptions, idParam));
app.get('/api/training-sessions/:id', callPagesHandler(trainingSessionById.onRequestGet, idParam));

app.options('/api/enrollments', callPagesHandler(enrollments.onRequestOptions));
app.post('/api/enrollments', callPagesHandler(enrollments.onRequestPost));

app.options('/api/submit-consultation', callPagesHandler(submitConsultation.onRequestOptions));
app.post('/api/submit-consultation', callPagesHandler(submitConsultation.onRequestPost));

app.options('/api/admin/contacts', callPagesHandler(adminContacts.onRequestOptions));
app.get('/api/admin/contacts', callPagesHandler(adminContacts.onRequestGet));

app.options('/api/admin/leads', callPagesHandler(adminLeads.onRequestOptions));
app.get('/api/admin/leads', callPagesHandler(adminLeads.onRequestGet));

app.options('/api/admin/enrollments', callPagesHandler(adminEnrollments.onRequestOptions));
app.get('/api/admin/enrollments', callPagesHandler(adminEnrollments.onRequestGet));

app.options('/api/admin/enrollments/:id', callPagesHandler(adminEnrollmentById.onRequestOptions, idParam));
app.patch('/api/admin/enrollments/:id', callPagesHandler(adminEnrollmentById.onRequestPatch, idParam));

app.options('/api/admin/training-sessions', callPagesHandler(adminTrainingSessions.onRequestOptions));
app.get('/api/admin/training-sessions', callPagesHandler(adminTrainingSessions.onRequestGet));
app.post('/api/admin/training-sessions', callPagesHandler(adminTrainingSessions.onRequestPost));

app.options('/api/admin/training-sessions/:id', callPagesHandler(adminTrainingSessionById.onRequestOptions, idParam));
app.put('/api/admin/training-sessions/:id', callPagesHandler(adminTrainingSessionById.onRequestPut, idParam));

export default {
  fetch(request: Request, env: Env, executionCtx: ExecutionContext) {
    if (request.method === 'HEAD' && new URL(request.url).pathname.startsWith('/api/')) {
      return new Response(null, { status: 404 });
    }
    return app.fetch(request, env, executionCtx);
  },
};
