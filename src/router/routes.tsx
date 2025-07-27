import type { RouteObject } from 'react-router-dom';

import { LoginPage }     from '../pages/login';
import { HomePage } from '../pages/homePage/homePage';
import { ProfilePage }   from '../pages/profilePage';
import { ErrorPage }     from '../pages/errorPage';
import { SendMail } from '../pages/SendMail';
import { VerificationCode } from '../pages/VerificationCode';
import { ResetPassword } from '../pages/ResetPassword';

export const routes: RouteObject[] = [
  { path: '/',           element: <HomePage />      },
  { path: '/login',      element: <LoginPage />     },
  { path: '/sendmail',      element: <SendMail />   },
  { path: '/verificationcode',      element: <VerificationCode />   },
  { path: '/resetpassword',      element: <ResetPassword />   },
  { path: '/home',       element: <HomePage />      },
  { path: '/profile',    element: <ProfilePage />   },
  { path: '*',           element: <ErrorPage />     },
];