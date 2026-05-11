import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

import { LoginComponent } from './pages/login/login.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { AdminComponent } from './pages/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    LoginComponent,
    VehiculosComponent,
    ReservasComponent,
    AdminComponent
  ],

  template: `

  <nav class="navbar">

    <div
      class="logo"
      (click)="currentPage='home'">

      Premium Cars

    </div>

    <div class="nav-links">

      <a (click)="currentPage='home'">
        Inicio
      </a>

      <a (click)="currentPage='vehicles'">
        Vehículos
      </a>

      <a
        *ngIf="isLoggedIn()"
        (click)="currentPage='reservas'">

        {{ isAdmin()
          ? 'Gestión Reservas'
          : 'Mis Reservas' }}

      </a>

      <a
        *ngIf="isAdmin()"
        (click)="currentPage='admin'">

        Admin

      </a>

      <a
        *ngIf="!isLoggedIn()"
        (click)="currentPage='login'">

        Login

      </a>

      <button
        *ngIf="isLoggedIn()"
        (click)="logout()">

        Cerrar sesión

      </button>

    </div>

  </nav>

  <!-- HERO -->

  <section
    class="hero"
    *ngIf="currentPage === 'home'">

    <h1>
      Renta los mejores vehículos
    </h1>

    <p>
      Vehículos premium para viajes,
      negocios y experiencias únicas.
    </p>

  </section>

  <!-- ABOUT -->

  <section
    class="about-section"
    *ngIf="currentPage === 'home'">

    <div class="about-container">

      <div class="about-text">

        <h2>
          Sobre Nosotros
        </h2>

        <p>
          En Premium Cars ofrecemos
          vehículos premium para viajes,
          negocios y experiencias exclusivas.
        </p>

        <p>
          Nuestro objetivo es brindar
          comodidad, elegancia y seguridad
          en cada trayecto.
        </p>

      </div>

      <div class="stats-grid">

        <div class="stat-card">
          <h3>+500</h3>
          <p>Clientes</p>
        </div>

        <div class="stat-card">
          <h3>+50</h3>
          <p>Vehículos</p>
        </div>

        <div class="stat-card">
          <h3>24/7</h3>
          <p>Soporte</p>
        </div>

        <div class="stat-card">
          <h3>5⭐</h3>
          <p>Calificación</p>
        </div>

      </div>

    </div>

  </section>

  <!-- CONTACTO -->

  <section
    class="contact-section"
    *ngIf="currentPage === 'home'">

    <h2>
      Contacto
    </h2>

    <div class="contact-grid">

      <div class="contact-card">

        <h3>WhatsApp</h3>

        <p>
          +57 300 123 4567
        </p>

      </div>

      <div class="contact-card">

        <h3>Email</h3>

        <p>
          premiumcars&#64;test.com
        </p>

      </div>

      <div class="contact-card">

        <h3>Ubicación</h3>

        <p>
          Duitama - Boyacá, Colombia
        </p>

      </div>

    </div>

  </section>

  <!-- LOGIN -->

  <app-login
    *ngIf="currentPage === 'login'">
  </app-login>

  <!-- VEHÍCULOS -->

  <app-vehiculos
    *ngIf="currentPage === 'vehicles'
    || currentPage === 'home'">
  </app-vehiculos>

  <!-- RESERVAS -->

  <app-reservas
    *ngIf="currentPage === 'reservas'">
  </app-reservas>

  <!-- ADMIN -->

  <app-admin
    *ngIf="currentPage === 'admin'
    && isAdmin()">
  </app-admin>

  <!-- FOOTER -->

  <footer class="footer">

    <p>
      © 2026 Premium Cars.
      Todos los derechos reservados.
    </p>

  </footer>

  `
})

export class AppComponent {

  currentPage = 'home';

  isLoggedIn() {

    return !!localStorage.getItem('token');

  }

  logout() {

    localStorage.removeItem('token');

    this.currentPage = 'home';

  }

  isAdmin() {

    const token = localStorage.getItem('token');

    if (!token) return false;

    const decoded: any = jwtDecode(token);

    return decoded.rol === 'admin';

  }

}