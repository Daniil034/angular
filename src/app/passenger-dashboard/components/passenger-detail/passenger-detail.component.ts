import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn"
      ></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.name"
          (input)="onNameChange(name.value)"
          #name
        >
      </div>
      <div *ngIf="!editing">
        {{detail.name}}
      </div>
      <p>{{detail | json}}</p>
      <div class="date">
        Check in
        date: {{  detail.checkInDate ? (detail.checkInDate | date: "yMMMMd" | uppercase) : 'Not checked in'}}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{editing ? 'Save' : 'Edit'}}
      </button>
      <button (click)="handleRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input() detail!: Passenger;
  editing: boolean = false;
  @Output() edit = new EventEmitter<Passenger>();
  @Output() remove = new EventEmitter<Passenger>();

  onNameChange(value: string) {
    this.detail.name = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  handleRemove() {
    this.remove.emit(this.detail);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    if (changes["detail"]) {
      this.detail = Object.assign({}, changes["detail"].currentValue);
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
