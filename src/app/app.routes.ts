  import { Routes } from '@angular/router';
  import { AuthGuard } from './auth/guard/auth.guard';

  export const routes: Routes = [
    {
      path: 'login',
      loadComponent: () => import('./auth/pages/login/login.component')
    },
    {
      path: 'home',
      loadComponent: () => import('./home/home/home.component'),
      canActivate: [AuthGuard],
      children: [
        {
          path: 'menudash',
          title: 'menudash',
          loadComponent: () => import('./components/menudash/menudash.component')
        },
        {
          path: 'navbar',
          title: 'navbar',
          loadComponent: () => import('./components/navbar/navbar.component')
        },
        {
          path: 'main',
          title: 'main',
          loadComponent: () => import('./components/main/main.component')
        },
        {
          path: 'footer',
          title: 'footer',
          loadComponent: () => import('./components/footer/footer.component')
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
