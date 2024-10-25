import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CAMPPRICELIST_MODULE_DECLARATIONS, CampPriceListRoutingModule} from  './CampPriceList-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CampPriceListRoutingModule
  ],
  declarations: CAMPPRICELIST_MODULE_DECLARATIONS,
  exports: CAMPPRICELIST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampPriceListModule { }