// Copies the web app (one level up) into www/, which Capacitor bundles into the native apps.
// The service worker is left out: the native shell already ships the files offline.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, '..', '..');
const www = join(here, '..', 'www');

rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });
for (const f of ['index.html', 'manifest.webmanifest', 'icons']) {
  cpSync(join(web, f), join(www, f), { recursive: true });
}
console.log('Copied web app into', www);
