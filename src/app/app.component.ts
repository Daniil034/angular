import {Component} from "@angular/core";

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="app">
            <passenger-viewer/>
        </div>
    `
})
export class AppComponent {
}
