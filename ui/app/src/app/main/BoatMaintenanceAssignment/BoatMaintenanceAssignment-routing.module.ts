import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatMaintenanceAssignmentHomeComponent } from './home/BoatMaintenanceAssignment-home.component';
import { BoatMaintenanceAssignmentNewComponent } from './new/BoatMaintenanceAssignment-new.component';
import { BoatMaintenanceAssignmentDetailComponent } from './detail/BoatMaintenanceAssignment-detail.component';

const routes: Routes = [
  {path: '', component: BoatMaintenanceAssignmentHomeComponent},
  { path: 'new', component: BoatMaintenanceAssignmentNewComponent },
  { path: ':id', component: BoatMaintenanceAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BoatMaintenanceAssignment-detail-permissions'
      }
    }
  }
];

export const BOATMAINTENANCEASSIGNMENT_MODULE_DECLARATIONS = [
    BoatMaintenanceAssignmentHomeComponent,
    BoatMaintenanceAssignmentNewComponent,
    BoatMaintenanceAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatMaintenanceAssignmentRoutingModule { }