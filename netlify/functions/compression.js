// Netlify Edge Function for additional compression
exports.handler = async (event, context) => {
  const { headers } = event;
  
  // Check if client accepts compressed content
  const acceptEncoding = headers['accept-encoding'] || '';
  const supportsGzip = acceptEncoding.includes('gzip');
  const supportsBrotli = acceptEncoding.includes('br');
  
  // Set appropriate compression headers
  const responseHeaders = {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };
  
  if (supportsBrotli) {
    responseHeaders['Content-Encoding'] = 'br';
  } else if (supportsGzip) {
    responseHeaders['Content-Encoding'] = 'gzip';
  }
  
  return {
    statusCode: 200,
    headers: responseHeaders,
    body: event.body
  };
};