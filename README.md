# Solid SSR Template

This repo exists to provide a helpful idea of how to host a SSR SolidStart
application.

## Setup

- Initialize the app normally with SolidStart
  - Make sure SSR is selected
- Run `npm i -D solid-start-vercel`
- Add the SolidStart Vercel Adapter
  - Steps described
    [here](https://github.com/solidjs/solid-start/blob/cbafb3108b79533f6492719af74842df1c7fe26e/packages/start-vercel/README.md)
- In Vercel, set the `ENABLE_VC_BUILD` environment variable to `1` (or use the
  Vercel CLI as mentioned in the above link)
- You are now done. No need to change Vercel's default SolidStart output
  directory, build command, etc.

## Additional Information

- ISR/Prerender is optional, but is enabled in this repository
  - This functionality exists to improve static build times, read more about it
    online if in need of a refresher
- With CSR, none of this is necessary but you do need to change the output
  directory to `dist/public`
