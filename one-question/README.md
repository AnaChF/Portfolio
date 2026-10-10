# One Question at a Time

A guided path from a three-way tension to Postulates, a Definition and Theorem 1, one question per screen, with a pre-writing page, a drafting board, a blueprint and Markdown export.

The same page ships three ways.

| Version | Where it runs | Where answers are saved |
| --- | --- | --- |
| Hosted Claude page | claude.ai, any browser | Your Claude account, synced across devices |
| Installable web app (this folder) | GitHub Pages, added to a home screen or desktop | The browser on that device |
| Native app (`native/`) | iOS and Android | The app on that device |

Outside Claude the account sync switches itself off and the status in the header reads "Saved in this browser". Use **Export** to move notes between devices.

## Installable web app

Files: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. The service worker caches the app and its fonts, so it works offline after the first visit.

**Publish:** in the repository settings, open **Pages** and set **Source** to **GitHub Actions**. Every push to `main` then runs `.github/workflows/pages.yml`, and the app is served at
`https://<github-user>.github.io/<repo>/one-question/`.

**Install:**
- iPhone or iPad (Safari): Share, then **Add to Home Screen**.
- Android (Chrome): menu, then **Install app**.
- Desktop (Chrome or Edge): the install icon at the right of the address bar.

**Run locally:** `python3 -m http.server` from the repository root, then open `http://localhost:8000/one-question/`.

## Native app (Capacitor)

`native/` wraps the same web files in a Capacitor shell. `android/` and `ios/` are the generated native projects; `www/` is rebuilt from the web app each time.

```sh
cd one-question/native
npm install
npm run sync            # copy the web app into www/ and both native projects
npm run open:android    # opens Android Studio: Run, or Build > Generate Signed Bundle
npm run open:ios        # opens Xcode (macOS only): Run, or Product > Archive
```

Re-run `npm run sync` after every change to `index.html`.

For iOS, install CocoaPods once (`sudo gem install cocoapods`) and run `npx cap sync ios` on the Mac before opening Xcode.

To ship to the stores you need an Apple Developer account (99 USD a year) and a Google Play developer account (25 USD once). The bundle id is `com.anakis.onequestion`. Change it in `capacitor.config.json` before the first upload, because it cannot change afterwards.
