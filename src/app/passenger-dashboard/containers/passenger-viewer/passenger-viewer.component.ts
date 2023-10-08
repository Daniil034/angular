import {Component, OnInit} from "@angular/core";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";


@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-viewer.component.scss'],
    template: `
        <div>
            {{passenger | json}}
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger = {} as Passenger;

    constructor(private passengerService: PassengerDashboardService) {
    }

    ngOnInit(): void {
        this.passengerService
            .getPassenger(3)
            .subscribe(data => this.passenger = data);

    }
}
