import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CampPriceList-card.component.html',
  styleUrls: ['./CampPriceList-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CampPriceList-card]': 'true'
  }
})

export class CampPriceListCardComponent {


}