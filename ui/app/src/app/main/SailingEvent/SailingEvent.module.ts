import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SAILINGEVENT_MODULE_DECLARATIONS, SailingEventRoutingModule} from  './SailingEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SailingEventRoutingModule
  ],
  declarations: SAILINGEVENT_MODULE_DECLARATIONS,
  exports: SAILINGEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SailingEventModule { }