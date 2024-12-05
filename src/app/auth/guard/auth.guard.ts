import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      Swal.fire({
        text: 'Debes iniciar sesión para acceder a esta página.',
        icon: 'warning',
        confirmButtonColor: '#EA535A',
        color: '#17202a',
        confirmButtonText: 'Ir a Login',
      }).then(() => {

        this.router.navigateByUrl('/login');
      });
      return false;
    }
  }
}
