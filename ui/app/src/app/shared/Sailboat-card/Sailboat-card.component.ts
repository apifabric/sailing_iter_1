import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Sailboat-card.component.html',
  styleUrls: ['./Sailboat-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Sailboat-card]': 'true'
  }
})

export class SailboatCardComponent {


}