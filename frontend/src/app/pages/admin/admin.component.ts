import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  marca = '';
  modelo = '';
  precio = 0;
  imagen = '';
  descripcion = '';

  vehiculos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {

    this.http.get<any[]>(
      'http://localhost:3000/vehiculos'
    ).subscribe(data => {

      this.vehiculos = data;

    });

  }

  crearVehiculo() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.post(
      'http://localhost:3000/vehiculos',
      {
        marca: this.marca,
        modelo: this.modelo,
        precio: this.precio,
        imagen: this.imagen,
        descripcion: this.descripcion
      },
      { headers }
    ).subscribe(() => {

      alert('Vehículo creado');

      this.obtenerVehiculos();

      this.marca = '';
      this.modelo = '';
      this.precio = 0;
      this.imagen = '';
      this.descripcion = '';

    });

  }

  eliminarVehiculo(id: string) {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.delete(
      `http://localhost:3000/vehiculos/${id}`,
      { headers }
    ).subscribe(() => {

      alert('Vehículo eliminado');

      this.obtenerVehiculos();

    });

  }
  actualizarVehiculo(vehiculo: any) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  this.http.put(
    `http://localhost:3000/vehiculos/${vehiculo._id}`,
    vehiculo,
    { headers }
  ).subscribe(() => {

    alert('Vehículo actualizado');

    this.obtenerVehiculos();

  });

}

}