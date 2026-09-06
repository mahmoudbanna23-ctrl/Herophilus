# Launch day — the three things only you can do

These three tasks live inside Google/Firebase's and Netlify's own websites (their
"consoles" — the control-panel page you see after logging in). Nobody else can click
these buttons for you, and nobody can do it by editing code. Do them in order.

You will need to be logged into the Google account that owns the Firebase project
called **ward-round-e4822** (that name is fixed — it's how you'll recognize the right
project if your Google account has more than one).

---

## Task 1 — Publish the Firestore security rules

**What this is:** Firestore is the cloud database that stores everyone's quiz
progress. Right now it has no lock on the door. These rules are that lock: they make
sure a signed-in student can only ever read and write their *own* progress, never
anyone else's, and that nothing else in the database can be touched by anybody.

1. Go to **console.firebase.google.com** in your browser and log in.
2. Click the project named **ward-round-e4822**.
3. In the left-hand sidebar, click **Build** to expand it.
4. Under **Build**, click **Firestore Database**.
5. Along the top of the page, click the tab labeled **Rules**.
6. You'll see a box full of text — this is the current (unlocked) rule. Click inside
   that box and select everything (click once inside the box, then press
   **Ctrl+A** on Windows or **Cmd+A** on Mac).
7. Delete the selected text (press **Delete**).
8. Open the file **`progress\firestore.rules`** in this project folder, select all of
   its contents, and copy it.
9. Paste it into the now-empty box in Firebase.
10. Click the **Publish** button above the box.

**How to tell it worked:** After you click Publish, Firebase shows a small
confirmation (usually a toast message saying the rules were published, and the
"last published" timestamp at the top of the Rules tab updates to just now). If you
see a red error message instead, the paste was incomplete — go back to step 6 and
redo it, making sure you copied the *whole* file.

---

## Task 2 — Add your live website address to Firebase's authorized domains

**What this is:** "Authorized domains" is Firebase's list of web addresses it will
allow to sign people in with Google. Right now that list only has the addresses
Firebase added automatically. Without your real website's address on that list,
the "Sign in with Google" button will fail for every student the moment the app is
live on the internet — even though it works fine while you're testing it on your own
computer. This step is what makes it work for everyone else too.

1. First, find your live web address. In a separate browser tab, go to
   **app.netlify.com**, log in, and click on your site. Its address is shown near
   the top, usually looking like `something-random.netlify.app` (you can also set a
   custom one later — whatever it says there is what you'll use in step 5 below).
2. Back in the Firebase tab, click **Build** in the left sidebar (if it's not
   already expanded).
3. Click **Authentication**.
4. Along the top of the page, click the tab labeled **Settings**.
5. Find the section called **Authorized domains** (you may need to scroll down
   slightly) and click **Add domain**.
6. Type your site's address from step 1 — **just the domain, with nothing before or
   after it** (for example `something-random.netlify.app` — no `https://`, no
   trailing slash, no page name after it).
7. Click **Add**.

**How to tell it worked:** The address you typed now appears in the **Authorized
domains** list on that same page, alongside the ones already there. To fully
confirm, open your live Netlify site on your phone or a different computer, click
**Sign in with Google**, and it should show the normal Google account picker instead
of an error page.

*Note: Firebase's exact wording for this page changes from time to time — if
"Settings" or "Authorized domains" isn't exactly what you see, look for a tab or
section whose name is close to that (something mentioning "authorized" or
"domains") rather than assuming the feature is missing.*

---

## Task 3 — Take the Google sign-in screen out of "Testing" mode

**What this is:** When you first set up "Sign in with Google," Google defaults it to
**Testing** mode. In Testing mode, Google sign-in only works for a short hand-picked
list of email addresses you typed in yourself while setting things up — every other
Google account that tries to sign in is flatly refused, with no useful error message
for the student. Moving it to **Production** (sometimes called "In production" or
"Published") means *any* Google account can sign in, which is what you need for a
class of students.

1. Go to **console.cloud.google.com** in your browser (this is Google Cloud's
   console, a sister site to Firebase — the same Google login works on both).
2. Make sure the project selector at the top of the page shows
   **ward-round-e4822** (click it and pick that project if it shows something
   else).
3. In the left-hand sidebar, click **APIs & Services**.
4. Click **OAuth consent screen** ("OAuth" is just the name of the technology
   behind "Sign in with Google" — you don't need to know more than that).
5. Near the top of the page you'll see the current status. If it says
   **Testing**, look for a button labeled **Publish App** and click it.
6. A confirmation box will appear warning that your app will be available to any
   user — click **Confirm** (or **Publish**, whichever it says).

**How to tell it worked:** The status label at the top of that page now says
**In production** (or **Published**) instead of **Testing**. As a real-world check,
ask a classmate whose email you did *not* add to any list to try signing in on the
live site — they should reach the normal app instead of an error screen.

*Note: Google sometimes asks you to fill in extra details (an app name, a support
email, a logo) before it lets you publish — if you hit a form like that, fill in the
plain-language fields it asks for (an email address and a short name are usually all
that's required for this kind of internal/small-scale app) and continue; it does not
need a logo to publish.*

*Also note: for a small number of Google Workspace/education accounts, Google adds
one extra confirmation screen about "user type" (Internal vs External) — if you see
that and are unsure which to pick, choose **External** so students outside your own
organization's Google Workspace (if any) aren't blocked; this doesn't cost anything
or require a business.*

---

## When all three are done

Google sign-in and cloud sync will work for any classmate who opens your Netlify
link, and each person's progress will be private to their own account. Nothing else
about the app needs to change for this to be true — these three console steps are
the whole gap between "works on my computer" and "works for the class."
