import { useForgotPasswordStore } from "../../../../store/forgotPasswordStore";
import { SendMail } from "../../../SendMail";
import { VerificationCode } from "../../../VerificationCode";
import { ResetPassword } from "../../../ResetPassword";

export const ForgotPasswordFlow: React.FC = () => {
  const { step } = useForgotPasswordStore();
  
  const flowComponents = {
    sendMail: <SendMail />,
    verificationCode: <VerificationCode />,
    resetPassword: <ResetPassword flow="recovery" />
  };

  return flowComponents[step] || <SendMail />;
};