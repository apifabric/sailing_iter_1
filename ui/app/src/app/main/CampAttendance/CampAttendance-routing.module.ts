import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampAttendanceHomeComponent } from './home/CampAttendance-home.component';
import { CampAttendanceNewComponent } from './new/CampAttendance-new.component';
import { CampAttendanceDetailComponent } from './detail/CampAttendance-detail.component';

const routes: Routes = [
  {path: '', component: CampAttendanceHomeComponent},
  { path: 'new', component: CampAttendanceNewComponent },
  { path: ':id', component: CampAttendanceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CampAttendance-detail-permissions'
      }
    }
  }
];

export const CAMPATTENDANCE_MODULE_DECLARATIONS = [
    CampAttendanceHomeComponent,
    CampAttendanceNewComponent,
    CampAttendanceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampAttendanceRoutingModule { }