import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})

export class LoginComponent {

  nombre = '';
  email = '';
  telefono = '';
  password = '';

  isRegister = false;

  constructor(private http: HttpClient) {}

  login() {

    this.http.post<any>(
      'http://localhost:3000/usuarios/login',
      {
        email: this.email,
        password: this.password
      }
    ).subscribe(res => {

      localStorage.setItem('token', res.token);

      alert('Login exitoso');

      location.reload();

    }, err => {

      alert('Credenciales incorrectas');

    });

  }

  register() {

    this.http.post(
      'http://localhost:3000/usuarios',
      {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        password: this.password
      }
    ).subscribe(() => {

      alert('Usuario creado');

      this.isRegister = false;

      this.nombre = '';
      this.email = '';
      this.telefono ='';
      this.password = '';

    }, err => {

      alert('Error registrando usuario');

    });

  }

}