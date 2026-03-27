/*
 * Ma Fête - Cloudflare Worker
 * Sirve archivos estáticos desde el bucket KV
 */

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    // Sirve el asset estático
    return await getAssetFromKV(event, {
      cacheControl: {
        browserTTL: 60 * 60 * 24,       // 1 día en browser
        edgeTTL: 60 * 60 * 24 * 7,      // 7 días en edge
        bypassCache: false,
      },
    });
  } catch (e) {
    // Fallback: sirve index.html para SPA routing
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
      });
    } catch (e2) {
      return new Response('Ma Fête - Not Found', { status: 404 });
    }
  }
}
