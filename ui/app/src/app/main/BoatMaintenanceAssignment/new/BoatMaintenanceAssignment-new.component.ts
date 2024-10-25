import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BoatMaintenanceAssignment-new',
  templateUrl: './BoatMaintenanceAssignment-new.component.html',
  styleUrls: ['./BoatMaintenanceAssignment-new.component.scss']
})
export class BoatMaintenanceAssignmentNewComponent {
  @ViewChild("BoatMaintenanceAssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}