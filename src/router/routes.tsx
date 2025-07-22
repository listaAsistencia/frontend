import type { RouteObject } from 'react-router-dom';

import { LoginPage }     from '../pages/login';
import { HomePage } from '../pages/homePage/homePage';
import { ProfilePage }   from '../pages/profilePage';
import { ErrorPage }     from '../pages/errorPage';

export const routes: RouteObject[] = [
  { path: '/',           element: <HomePage />      },
  { path: '/login',      element: <LoginPage />     },
  { path: '/home',       element: <HomePage />      },
  { path: '/profile',    element: <ProfilePage />   },
  { path: '*',           element: <ErrorPage />     },
];