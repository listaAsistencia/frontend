import type { RouteObject } from 'react-router-dom';

import { LoginPage }     from '../pages/login';
import { HomePage }      from '../pages/homePage';
import { ProfilePage }   from '../pages/profilePage';
import { AttendancePage }from '../pages/attendance';
import { ErrorPage }     from '../pages/errorPage';

export const routes: RouteObject[] = [
  { path: '/',           element: <HomePage />      },
  { path: '/login',      element: <LoginPage />     },
  { path: '/home',       element: <HomePage />      },
  { path: '/profile',    element: <ProfilePage />   },
  { path: '/attendance', element: <AttendancePage />},
  { path: '*',           element: <ErrorPage />     },
];