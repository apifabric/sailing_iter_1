import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SAILBOAT_MODULE_DECLARATIONS, SailboatRoutingModule} from  './Sailboat-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SailboatRoutingModule
  ],
  declarations: SAILBOAT_MODULE_DECLARATIONS,
  exports: SAILBOAT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SailboatModule { }