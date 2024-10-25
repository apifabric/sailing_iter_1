import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CAMPATTENDANCE_MODULE_DECLARATIONS, CampAttendanceRoutingModule} from  './CampAttendance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CampAttendanceRoutingModule
  ],
  declarations: CAMPATTENDANCE_MODULE_DECLARATIONS,
  exports: CAMPATTENDANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampAttendanceModule { }