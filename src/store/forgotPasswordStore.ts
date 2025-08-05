import {create} from 'zustand'

interface ForgotPasswordState{
    email:string;
    code:string;
    step:'sendMail' |'verificationCode'|'resetPassword';
    setMail:(email:string)=>void;
    setCode:(code:string)=>void;
    setStep: (step: 'sendMail' |'verificationCode'|'resetPassword')=>void;
    reset:()=>void;
}
export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
  email: '',
  code: '',
  step: 'sendMail',
  setMail: (email) => set({ email }),
  setCode: (code) => set({ code }),
  setStep: (step) => set({ step }),
  reset: () => set({ email: '', code: '', step: 'sendMail' }),
}));
