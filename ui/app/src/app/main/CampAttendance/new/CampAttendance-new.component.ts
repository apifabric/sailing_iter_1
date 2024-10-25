import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CampAttendance-new',
  templateUrl: './CampAttendance-new.component.html',
  styleUrls: ['./CampAttendance-new.component.scss']
})
export class CampAttendanceNewComponent {
  @ViewChild("CampAttendanceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}