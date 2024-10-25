import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BoatEquipment-card.component.html',
  styleUrls: ['./BoatEquipment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BoatEquipment-card]': 'true'
  }
})

export class BoatEquipmentCardComponent {


}