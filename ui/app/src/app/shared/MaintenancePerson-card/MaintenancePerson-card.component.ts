import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MaintenancePerson-card.component.html',
  styleUrls: ['./MaintenancePerson-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MaintenancePerson-card]': 'true'
  }
})

export class MaintenancePersonCardComponent {


}