import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './reservas.component.html'
})

export class ReservasComponent implements OnInit {

  reservas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<any[]>(
      'http://localhost:3000/reservas',
      { headers }
    ).subscribe(data => {

      this.reservas = data;

    });

  }

  actualizarEstado(reserva: any) {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.put(

      `http://localhost:3000/reservas/${reserva._id}`,

      {
        estado: reserva.estado
      },

      { headers }

    ).subscribe(() => {

      alert('Estado actualizado');

    });

  }

  isAdmin() {

    const token = localStorage.getItem('token');

    if (!token) return false;

    const payload: any =
      JSON.parse(atob(token.split('.')[1]));

    return payload.rol === 'admin';

  }

}