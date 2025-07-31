interface ImportMetaEnv {
  readonly VITE_API_LOGIN: string;
  readonly VITE_BASE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}