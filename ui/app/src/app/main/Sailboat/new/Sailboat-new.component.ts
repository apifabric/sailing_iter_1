import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Sailboat-new',
  templateUrl: './Sailboat-new.component.html',
  styleUrls: ['./Sailboat-new.component.scss']
})
export class SailboatNewComponent {
  @ViewChild("SailboatForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}