import type { BookingEnv } from '../_lib/db-types';
import { jsonResponse, optionsResponse } from '../_lib/cors';
import { authenticateAdmin } from '../_lib/auth';

export const onRequestOptions: PagesFunction = async ({ request }) => optionsResponse(request);

/**
 * GET /api/admin/leads
 * Lists captured contact-form submissions, newest first.
 * Optional query: ?status=received|notified|notify_failed  ?limit=N (max 500)
 * `notify_failed` surfaces leads whose email could not be delivered — the ones
 * to follow up on after an email outage.
 */
export const onRequestGet: PagesFunction<BookingEnv> = async ({ request, env }) => {
  const auth = authenticateAdmin(request, env);
  if (!auth.ok) return jsonResponse(request, { error: 'Unauthorized', details: auth.error }, 401);

  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const limit = Math.min(Math.max(Number(url.searchParams.get('limit')) || 200, 1), 500);

  const binds: (string | number)[] = [];
  let query = 'SELECT * FROM leads';
  if (status) {
    query += ' WHERE notify_status = ?';
    binds.push(status);
  }
  query += ' ORDER BY created_at DESC LIMIT ?';
  binds.push(limit);

  const result = await env.PRICING_DB.prepare(query).bind(...binds).all();

  // Quick counts so the admin can see how many leads need follow-up at a glance.
  const summary = await env.PRICING_DB.prepare(
    'SELECT notify_status, COUNT(*) AS n FROM leads GROUP BY notify_status',
  ).all();

  return jsonResponse(request, {
    leads: result.results,
    count: result.results.length,
    summary: summary.results,
  });
};
