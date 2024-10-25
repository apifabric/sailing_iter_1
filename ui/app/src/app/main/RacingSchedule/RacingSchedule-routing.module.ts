import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacingScheduleHomeComponent } from './home/RacingSchedule-home.component';
import { RacingScheduleNewComponent } from './new/RacingSchedule-new.component';
import { RacingScheduleDetailComponent } from './detail/RacingSchedule-detail.component';

const routes: Routes = [
  {path: '', component: RacingScheduleHomeComponent},
  { path: 'new', component: RacingScheduleNewComponent },
  { path: ':id', component: RacingScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RacingSchedule-detail-permissions'
      }
    }
  }
];

export const RACINGSCHEDULE_MODULE_DECLARATIONS = [
    RacingScheduleHomeComponent,
    RacingScheduleNewComponent,
    RacingScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacingScheduleRoutingModule { }