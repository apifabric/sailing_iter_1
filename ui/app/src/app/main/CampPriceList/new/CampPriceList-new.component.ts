import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CampPriceList-new',
  templateUrl: './CampPriceList-new.component.html',
  styleUrls: ['./CampPriceList-new.component.scss']
})
export class CampPriceListNewComponent {
  @ViewChild("CampPriceListForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}