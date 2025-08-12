interface ImportMetaEnv {
  readonly VITE_API_LOGIN: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_CHANGEPASSWORD: string;
  readonly VITE_API_RESETPASSWORD: string;
  readonly VITE_API_USERS:string;
  readonly VITE_API_VERIFICATION_CODE:string;
   readonly VITE_API_VERIFY_CODE: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}