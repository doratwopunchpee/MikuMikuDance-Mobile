# MMD Mobile
Capacitor Android app (Three.js r128 + MMDLoader). All libraries are bundled, nothing loads from a CDN.

## Build with GitHub Actions
1. Push this folder to a GitHub repo (branch `main`).
2. Open the Actions tab, run "Build Android APK" (it also runs on every push).
3. Download `mmd-mobile-debug-apk` from the run and install `app-debug.apk`.
Change `appId` and `appName` in `capacitor.config.json` first if you want your own package name.

## Notes
- Exported .vmd, .mp4/.webm and project files open the Android share sheet so you can save them anywhere.
- Android WebView cannot pick whole folders; select the model and its textures together in the file picker.
