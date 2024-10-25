import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MaintenancePerson-new',
  templateUrl: './MaintenancePerson-new.component.html',
  styleUrls: ['./MaintenancePerson-new.component.scss']
})
export class MaintenancePersonNewComponent {
  @ViewChild("MaintenancePersonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}