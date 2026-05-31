const DASHBOARD_API_URL =
  import.meta.env.VITE_DASHBOARD_API_URL ||
  'https://api.spot-suite.com';

const PRODUCT_SLUG = 'cloud-evolvers';

type Metadata = Record<string, string | number | boolean | null | undefined>;

export function trackPortfolioEvent(eventName: string, metadata: Metadata = {}) {
  if (typeof window === 'undefined') return;
  const attribution = getPortfolioAttribution();

  const payload = {
    productSlug: PRODUCT_SLUG,
    eventName,
    source: 'cloud-evolvers-web',
    path: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || undefined,
    visitorId: attribution.visitorId,
    sessionId: attribution.sessionId,
    occurredAt: Math.floor(Date.now() / 1000),
    metadata: {
      ...getCampaignMetadata(),
      ...metadata,
    },
  };

  const url = `${DASHBOARD_API_URL}/api/events/collect`;
  const body = JSON.stringify(payload);
  // Fire-and-forget. sendBeacon with a text/plain blob avoids the CORS preflight
  // that the analytics worker rejects, so it neither logs a console error nor
  // needs the worker to return CORS headers for this one-way POST.
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      navigator.sendBeacon(url, new Blob([body], { type: 'text/plain' }));
    } else {
      void fetch(url, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(() => {});
    }
  } catch {
    /* analytics must never break the page */
  }
}

export function getPortfolioAttribution() {
  if (typeof window === 'undefined') return {};
  return {
    visitorId: getOrCreateId('cloud-evolvers:visitor-id', localStorage),
    sessionId: getOrCreateId('cloud-evolvers:session-id', sessionStorage),
  };
}

export function getCampaignMetadata(): Metadata {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'source'];
  const metadata: Metadata = {};

  for (const key of keys) {
    const value = params.get(key)?.trim();
    if (value) metadata[key] = value.slice(0, 120);
  }

  return metadata;
}

function getOrCreateId(key: string, storage: Storage): string {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;

    const id = typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : fallbackId();
    storage.setItem(key, id);
    return id;
  } catch {
    return fallbackId();
  }
}

function fallbackId(): string {
  const bytes = new Uint32Array(2);
  if (typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  }
  return `ce-${Date.now().toString(36)}-${Array.from(bytes, (value) => value.toString(36)).join('')}`;
}
