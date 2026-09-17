# Fix brief: Google sign-in returns to the sign-in step (bug 1)

Goal: after Google sign-in on https://herophilus.pages.dev the app must reach the profile step.
Edit only `app\index.html` and create `app\_worker.js`. Never open `app\data\*`. No other change.

## Root cause (verified 2026-09-17, Firebase doc "redirect-best-practices")

`authDomain` is `ward-round-e4822.firebaseapp.com` (line 2915) while the app lives on
`herophilus.pages.dev`. Chrome 115+, Safari 16.1+, Firefox 109+ partition third-party storage,
so the redirect flow (`signInWithRedirect` + `getRedirectResult`) loses the result and the gate
falls back to step 1. Firebase's Option 3: serve `/__/auth/*` from the app's own domain and set
`authDomain` to that domain. Cloudflare Pages Direct Upload runs a root `_worker.js`
(advanced mode) which can proxy those paths.

Second, smaller cause: popup path (line 4243) returns silently on `popup-closed|cancelled`, so
the user sees the sign-in step with no message.

## Edits

1. Line 2915: `authDomain: "ward-round-e4822.firebaseapp.com",` becomes
   `authDomain: "herophilus.pages.dev",`. Add a one-line comment above it in the style of the
   surrounding block: the auth handler is proxied by `_worker.js` so sign-in stays same-origin.

2. New file `app\_worker.js` (plain JS, ES module export, no dependencies):

   ```js
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
   ```

3. Line 4243: `if(/popup-closed|cancelled/i.test(m))return;` becomes
   `if(/popup-closed|cancelled/i.test(m)){toast('Sign-in cancelled');return}`

4. In `restoreSession()` (line 4466 region): the `getRedirectResult` try block swallows every
   error. Change `catch(e){}` on that block to `catch(e){console.warn('redirect result',e)}` so
   a failed redirect is visible in the console. Nothing else there changes.

Do NOT touch: the `isStandalone()` redirect branch (popups hang in the iOS home-screen app),
`gateSignInStep()`, `enterProfile()`, `afterSignIn()`, `loadSDK()`, any `wardround.*` key.

## Verify

- `node tools\boot-check\boot-check.js` prints `console errors: 0`, `QUESTIONS 4049`, `THEORY 81`.
- `node --check app\_worker.js` exits 0 (add `--input-type=module` if node complains about
  `export`; or run `node -e "import('./app/_worker.js').then(()=>console.log('ok'))"` from the
  repo root).
- `grep -c 'herophilus.pages.dev' app/index.html` is 1; `grep -c 'firebaseapp.com' app/index.html`
  is 0.
- `git diff --stat -- app/index.html` shows a small change (under 10 lines).

## Report

At most 100 words: each edit done or not, the four check results verbatim, anything unclear.
Cap 20 tool calls.
