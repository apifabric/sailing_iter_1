import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SailingEvent-new',
  templateUrl: './SailingEvent-new.component.html',
  styleUrls: ['./SailingEvent-new.component.scss']
})
export class SailingEventNewComponent {
  @ViewChild("SailingEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}