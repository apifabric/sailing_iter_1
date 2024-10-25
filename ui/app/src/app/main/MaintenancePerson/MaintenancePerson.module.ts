import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MAINTENANCEPERSON_MODULE_DECLARATIONS, MaintenancePersonRoutingModule} from  './MaintenancePerson-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MaintenancePersonRoutingModule
  ],
  declarations: MAINTENANCEPERSON_MODULE_DECLARATIONS,
  exports: MAINTENANCEPERSON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaintenancePersonModule { }