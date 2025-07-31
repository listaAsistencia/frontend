import type { RouteObject } from 'react-router-dom';

import { LoginPage } from '../pages/login';
import { ErrorPage } from '../pages/errorPage';
import { SendMail } from '../pages/SendMail';
import { VerificationCode } from '../pages/VerificationCode';
import { ResetPassword } from '../pages/ResetPassword';
import { AttendancePage } from '../pages/attendanceList';
import { ProtectedRoute } from './protectedroute';
import { StudentPage } from '../pages/homePage/studentPage/studentPage';
import { TeacherPage } from '../pages/homePage/teacherPage/teacherPage';

export const routes: RouteObject[] = [
{
  path:'/',
  element: <LoginPage/>
},
{ path: '/login', element: <LoginPage /> },
  { path: '/sendmail', element: <SendMail /> },
  { path: '/attendance', element: <AttendancePage /> },
  { path: '/verificationcode', element: <VerificationCode /> },
  { path: '/resetpassword', element: <ResetPassword /> },
{
    path: '/home',
    element: (
        <ProtectedRoute requiredRole="docente">
            <TeacherPage />
        </ProtectedRoute>
    ),
},
  {
    path: '/student',
    element: (
        <ProtectedRoute requiredRole="estudiante">
            <StudentPage />
        </ProtectedRoute>
    ),
},
];