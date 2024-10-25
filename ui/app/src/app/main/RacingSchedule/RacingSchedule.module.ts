import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RACINGSCHEDULE_MODULE_DECLARATIONS, RacingScheduleRoutingModule} from  './RacingSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RacingScheduleRoutingModule
  ],
  declarations: RACINGSCHEDULE_MODULE_DECLARATIONS,
  exports: RACINGSCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RacingScheduleModule { }