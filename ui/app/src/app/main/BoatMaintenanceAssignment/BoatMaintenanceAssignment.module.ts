import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BOATMAINTENANCEASSIGNMENT_MODULE_DECLARATIONS, BoatMaintenanceAssignmentRoutingModule} from  './BoatMaintenanceAssignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BoatMaintenanceAssignmentRoutingModule
  ],
  declarations: BOATMAINTENANCEASSIGNMENT_MODULE_DECLARATIONS,
  exports: BOATMAINTENANCEASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoatMaintenanceAssignmentModule { }