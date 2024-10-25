import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SailingEvent-card.component.html',
  styleUrls: ['./SailingEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SailingEvent-card]': 'true'
  }
})

export class SailingEventCardComponent {


}