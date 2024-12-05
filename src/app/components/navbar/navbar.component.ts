import { Component } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export default class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
