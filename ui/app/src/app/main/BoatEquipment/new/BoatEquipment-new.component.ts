import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BoatEquipment-new',
  templateUrl: './BoatEquipment-new.component.html',
  styleUrls: ['./BoatEquipment-new.component.scss']
})
export class BoatEquipmentNewComponent {
  @ViewChild("BoatEquipmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}