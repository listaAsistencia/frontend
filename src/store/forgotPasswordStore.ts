import {create} from 'zustand'

interface ForgotPasswordState{
    email:string;
    verificationcode:string;
    step:'sendMail' |'verificationCode'|'resetPassword';
    setMail:(email:string)=>void;
    setCode:(code:string)=>void;
    setStep: (step: 'sendMail' |'verificationCode'|'resetPassword')=>void;
    reset:()=>void;
}
export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
  email: '',
  verificationcode: '',
  step: 'sendMail',
  setMail: (email) => set({ email }),
  setCode: (code) => set({ verificationcode:code }),
  setStep: (step) => set({ step }),
  reset: () => set({ email: '', verificationcode: '', step: 'sendMail' }),
}));
