import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './JuniorCamper-card.component.html',
  styleUrls: ['./JuniorCamper-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.JuniorCamper-card]': 'true'
  }
})

export class JuniorCamperCardComponent {


}