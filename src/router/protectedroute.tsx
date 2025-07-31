import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'docente' | 'estudiante';
  fallbackPath?: string;
}

export const ProtectedRoute = ({
  children, 
  requiredRole,
  fallbackPath = '/login'
}: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (!userRole || userRole !== requiredRole) {
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};