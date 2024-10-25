import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'JuniorCamper-new',
  templateUrl: './JuniorCamper-new.component.html',
  styleUrls: ['./JuniorCamper-new.component.scss']
})
export class JuniorCamperNewComponent {
  @ViewChild("JuniorCamperForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}