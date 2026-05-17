const ALLOWED_ORIGINS = new Set([
  'https://cloudevolvers.com',
  'https://www.cloudevolvers.com',
  'https://test.cloudevolvers.com',
  'http://localhost:5173',
  'http://localhost:4321',
]);

export function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('Origin') ?? '';
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key, x-admin-password',
    'Vary': 'Origin',
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

export function jsonResponse(request: Request, data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(request), 'Content-Type': 'application/json' },
  });
}

export function optionsResponse(request: Request): Response {
  return new Response(null, { headers: corsHeaders(request) });
}
