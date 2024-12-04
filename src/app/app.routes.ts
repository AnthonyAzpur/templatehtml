  import { Routes } from '@angular/router';
  import { AuthGuard } from './auth/auth.guard';

  export const routes: Routes = [
    {
      path: 'login',
      loadComponent: () => import('./auth/pages/login/login.component')
    },
    {
      path: 'dashboard',
      loadComponent: () => import('./home/dashboard/dashboard.component'),
      canActivate: [AuthGuard],
      children: [
        {
          path: 'change-detection',
          title: 'Change Detection',
          loadComponent: () => import('./components/menudash/menudash.component')
        },
      ]

    },
      {
        path: '',
        redirectTo:'/login',
        pathMatch:'full'
      },
      {
        path: '**',
        redirectTo:'/login'
      }
  ];
