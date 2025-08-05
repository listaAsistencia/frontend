import { useForgotPasswordStore } from "../../../../store/forgotPasswordStore";
import { SendMail } from "../../../SendMail";
import { VerificationCode } from "../../../VerificationCode";
import { ResetPassword } from "../../../ResetPassword";
export const ForgotPasswordFlow: React.FC = () => {
     const { step } = useForgotPasswordStore();
switch (step) {
    case 'sendMail':
      return <SendMail />;
    case 'verificationCode':
      return <VerificationCode />;
    case 'resetPassword':
      return <ResetPassword />;
    default:
      return <SendMail />;
  }
};