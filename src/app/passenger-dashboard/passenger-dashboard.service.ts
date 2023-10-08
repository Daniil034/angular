import {Injectable} from "@angular/core";
import {Passenger} from "./models/passenger.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

const PASSENGER_API = 'http://localhost:8000/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get<Passenger[]>(PASSENGER_API)
            .pipe(catchError(error => {
                throw throwError(error.json())
            }));
    }

    getPassenger(id: number): Observable<Passenger> {
        return this.http
            .get<Passenger>(`${PASSENGER_API}/${id}`)
            .pipe(catchError(error => {
                throw throwError(error);
            }))
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        })
        const options = {
            headers: headers
        }
        return this.http
            .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .pipe(catchError(error => {
                throw throwError(error)
            }));
    }

    deletePassenger(passenger: Passenger): Observable<void> {
        return this.http
            .delete<void>(`${PASSENGER_API}/${passenger.id}`)
            .pipe(catchError(error => {
                throw throwError(error);
            }))
    }
}
