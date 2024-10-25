import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RacingSchedule-card.component.html',
  styleUrls: ['./RacingSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RacingSchedule-card]': 'true'
  }
})

export class RacingScheduleCardComponent {


}