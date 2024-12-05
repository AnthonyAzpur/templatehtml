import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule], // Agregar FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        text: 'Usuario o contraseña incorrecta',
        icon: 'warning',
        confirmButtonColor: '#EA535A',
        color: '#17202a',
        confirmButtonText: 'Ir a Login',
      }).then(() => {

        this.router.navigateByUrl('/login');
      });
    }
  }
}
