import React from "react";
import { Navigate } from "react-router-dom";
import { useForgotPasswordStore } from "../store/forgotPasswordStore";

interface RecoveryRouteProps {
  children: React.ReactNode;
}

export const RecoveryRoute: React.FC<RecoveryRouteProps> = ({ children }) => {
  const { email, code, step } = useForgotPasswordStore();
   if (!email && step !== 'sendMail') {
    return <Navigate to="/sendmail" replace />;
  }
  if (!code && step === 'resetPassword') {
    return <Navigate to="/verificationcode" replace />;
  }
   if (step === 'sendMail') {
    return <>{children}</>;
  }
  if (step === 'verificationCode' && email) {
    return <>{children}</>;
  }
  if (step === 'resetPassword' && email && code) {
    return <>{children}</>;
  }
  
  return <Navigate to="/sendmail" replace />;
  };
