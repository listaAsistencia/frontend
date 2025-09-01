import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'docente' | 'estudiante' | 'admin';
  fallbackPath?: string;
}

export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({
  children, 
  requiredRole,
  fallbackPath = '/login'
})=>{
   const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

    if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && (!userRole || userRole !== requiredRole)) {
    return <Navigate to={fallbackPath}replace/>;
} 
return<>{children}</>
};