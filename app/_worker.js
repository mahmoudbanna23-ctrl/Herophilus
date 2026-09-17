/* Cloudflare Pages advanced-mode worker.
   Proxies Firebase's auth handler so sign-in runs on this origin
   (Firebase "redirect best practices", option 3). Everything else is
   served as a static asset. */
const AUTH_HOST = 'ward-round-e4822.firebaseapp.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/__/auth/')) {
      url.hostname = AUTH_HOST;
      return fetch(new Request(url.toString(), request));
    }
    return env.ASSETS.fetch(request);
  }
};
