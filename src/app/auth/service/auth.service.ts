import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    return token !== null;
  }

  // Método de login simulado
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('auth_token', 'fake-jwt-token');
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
