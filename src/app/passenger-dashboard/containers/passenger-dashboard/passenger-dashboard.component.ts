import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count [items]="passengers"/>
            <div *ngFor="let passenger of passengers">
                {{passenger.name}}
            </div>
            <passenger-detail
                    *ngFor="let passenger of passengers"
                    [detail]="passenger"
                    (edit)="handleEdit($event)"
                    (remove)="handleRemove($event)"
            />
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[] = [];

    constructor(private passengerService: PassengerDashboardService) {
    }

    ngOnInit(): void {
        this.passengerService
            .getPassengers()
            .subscribe((data) => this.passengers = data)
    }

    handleRemove(event: Passenger) {
        this.passengerService
            .deletePassenger(event)
            .subscribe(() => {
                this.passengers = this.passengers.filter(passenger => passenger.id !== event.id);
            })
    }

    handleEdit(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe(() => {
                this.passengers = this.passengers.map(passenger => {
                    let newPassenger;
                    if (event.id === passenger.id) {
                        newPassenger = Object.assign({}, passenger, event);
                    } else {
                        newPassenger = passenger;
                    }
                    return newPassenger;
                })
            })
    }
}
