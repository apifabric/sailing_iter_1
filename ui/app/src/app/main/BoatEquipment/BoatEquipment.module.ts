import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BOATEQUIPMENT_MODULE_DECLARATIONS, BoatEquipmentRoutingModule} from  './BoatEquipment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BoatEquipmentRoutingModule
  ],
  declarations: BOATEQUIPMENT_MODULE_DECLARATIONS,
  exports: BOATEQUIPMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoatEquipmentModule { }