// eslint-disable-next-line spaced-comment
/// <reference path="../.astro/types.d.ts" />
// eslint-disable-next-line spaced-comment
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly GA_TRACKING_ID: string;
  readonly DOMAIN: string;
  readonly NODE_ENV: 'development' | 'test' | 'production';
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
