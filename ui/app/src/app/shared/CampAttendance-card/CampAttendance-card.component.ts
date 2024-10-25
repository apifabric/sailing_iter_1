import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CampAttendance-card.component.html',
  styleUrls: ['./CampAttendance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CampAttendance-card]': 'true'
  }
})

export class CampAttendanceCardComponent {


}