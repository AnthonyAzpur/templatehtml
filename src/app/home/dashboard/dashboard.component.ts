import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import MenudashComponent from "../../components/menudash/menudash.component";  // Asegúrate de importar el servicio

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MenudashComponent],  // Necesario para el uso del Router
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export  default class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) {}

  // Método para cerrar sesión
  logout() {
    this.authService.logout();  // El servicio maneja el logout
    this.router.navigate(['/login']);  // Redirige al login
  }
}
