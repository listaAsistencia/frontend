import type { RouteObject } from 'react-router-dom';

import { LoginPage } from '../pages/login';
import { SendMail } from '../pages/SendMail';
import { VerificationCode } from '../pages/VerificationCode';
import { ResetPassword } from '../pages/ResetPassword';
import { AttendancePage } from '../pages/attendanceList';
import { ProtectedRoute } from './protectedroute';
import { RecoveryRoute } from '../routes/Recoveryroute';
import { StudentPage } from '../pages/homePage/studentPage/studentPage';
import { TeacherPage } from '../pages/homePage/teacherPage/teacherPage';
import { ManageStudents } from '../pages/manageStudents';

export const routes: RouteObject[] = [
{
  path:'/',element: <LoginPage/>
},
  { path: '/login', element: <LoginPage /> },


  { path: '/sendmail', element: <SendMail /> },
  { path: '/verificationcode', element: <VerificationCode /> },
  { path: '/resetpassword', element: (<RecoveryRoute><ResetPassword flow="recovery" /></RecoveryRoute> ),},
{
  path: '/resetpassword/change',
  element: (
    <ProtectedRoute requiredRole={localStorage.getItem('userRole') as 'docente' | 'estudiante'}>
      <ResetPassword flow="change" />
    </ProtectedRoute>
  )
},
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
{
    path: '/attendance',
    element: (
        <ProtectedRoute requiredRole="docente">
            <AttendancePage/>
        </ProtectedRoute>   
    ),
},
{
    path: '/manage',
    element: (
        <ProtectedRoute requiredRole="docente">
            <ManageStudents/>
        </ProtectedRoute>   
    ),
},

];