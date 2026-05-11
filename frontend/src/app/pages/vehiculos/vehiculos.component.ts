import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[] = [];
  fechas: any = {};
  today = new Date().toISOString().split('T')[0];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/vehiculos')
      .subscribe(data => {
        this.vehiculos = data;
      });
  }

  reservar(id: string) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  const vehiculo = this.vehiculos.find(
    v => v._id === id
  );

  const fechaInicio =
    this.fechas[id]?.fechaInicio;

  const fechaFin =
    this.fechas[id]?.fechaFin;

  if (!fechaInicio || !fechaFin) {

    alert('Selecciona las fechas');

    return;

  }

  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);
  const hoy = new Date();

hoy.setHours(0,0,0,0);

if (inicio < hoy) {

  alert('La fecha inicial no puede ser anterior a hoy');

  return;

}

if (fin <= inicio) {

  alert('La fecha final debe ser mayor a la inicial' );

  return;

}

  const diferencia =
    fin.getTime() - inicio.getTime();

  const dias =
    diferencia / (1000 * 3600 * 24);

  const precioTotal =
    dias * vehiculo.precio;

  this.http.post(
    'http://localhost:3000/reservas',
    {
      vehiculo: id,
      fechaInicio,
      fechaFin,
      precioTotal
    },
    { headers }
  ).subscribe({

  next: () => {

    alert(`Reserva creada. Total: $${precioTotal}`);

  },

  error: (err) => {

    alert(
      err.error.mensaje
    );

  }

});

}
calcularTotal(v: any) {

  const fechaInicio =
    this.fechas[v._id]?.fechaInicio;

  const fechaFin =
    this.fechas[v._id]?.fechaFin;

  if (!fechaInicio || !fechaFin) {
    return 0;
  }

  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);

  const diferencia =
    fin.getTime() - inicio.getTime();

  const dias =
    diferencia / (1000 * 3600 * 24);

  if (dias <= 0) {
    return 0;
  }

  return dias * v.precio;

}

}