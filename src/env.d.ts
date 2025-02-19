/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  VITE_TELEGRAM_CHAT_ID: string;
  VITE_TELEGRAM_BOT_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}