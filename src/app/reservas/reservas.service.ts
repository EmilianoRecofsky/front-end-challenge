import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Reserva } from '../entity/reserva.model';

@Injectable()
export class ReservasService {

    constructor(
        private http_client: HttpClient
    ){
    }

    getReservas = () => {
        // Tratamiento con backend
        // return this.http_client.get(Constantes.baseUrl + '/reserva/obtenerReservas');
        // Tratamiento con localStorage
        let reservas: Reserva[] = JSON.parse(localStorage.getItem("reservas"));
        return reservas? reservas : [];
    }

    agregarReserva(reserva) {
        // Tratamiento con backend
        // var request = JSON.stringify(reserva);
        // return this.http_client.post(Constantes.baseUrl + '/reserva/agregarReserva', request, this.generateHeaders());
        // Tratamiento con localStorage
        let reservas: Reserva[] = JSON.parse(localStorage.getItem("reservas"));
        reservas = reservas? reservas : [];
        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }

    private generateHeaders = () => {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
    }

    private handleError(error: any): Promise<any> {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    }

}
