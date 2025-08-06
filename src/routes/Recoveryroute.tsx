import React from "react";
import { Navigate } from "react-router-dom";
import { useForgotPasswordStore } from "../store/forgotPasswordStore";

interface RecoveryRouteProps {
  children: React.ReactNode;
}

export const RecoveryRoute: React.FC<RecoveryRouteProps> = ({ children }) => {
  const { email, verificationcode, step } = useForgotPasswordStore();
  if (!email || !verificationcode || step !== 'resetPassword') {
    return <Navigate to="/sendmail" replace />;
  }

  return <>{children}</>;
};
