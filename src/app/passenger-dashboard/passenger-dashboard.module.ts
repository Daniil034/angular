import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";
import {PassengerDashboardService} from "./passenger-dashboard.service";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent
    ],
    exports: [
        PassengerViewerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {
}
