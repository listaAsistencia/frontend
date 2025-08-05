interface ImportMetaEnv {
  readonly VITE_API_LOGIN: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_CHANGEPASSWORD: string;
  readonly VITE_API_USERS:string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}