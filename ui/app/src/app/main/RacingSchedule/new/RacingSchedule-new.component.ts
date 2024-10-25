import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RacingSchedule-new',
  templateUrl: './RacingSchedule-new.component.html',
  styleUrls: ['./RacingSchedule-new.component.scss']
})
export class RacingScheduleNewComponent {
  @ViewChild("RacingScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}