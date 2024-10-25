import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {JUNIORCAMPER_MODULE_DECLARATIONS, JuniorCamperRoutingModule} from  './JuniorCamper-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    JuniorCamperRoutingModule
  ],
  declarations: JUNIORCAMPER_MODULE_DECLARATIONS,
  exports: JUNIORCAMPER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuniorCamperModule { }