import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenancePersonHomeComponent } from './home/MaintenancePerson-home.component';
import { MaintenancePersonNewComponent } from './new/MaintenancePerson-new.component';
import { MaintenancePersonDetailComponent } from './detail/MaintenancePerson-detail.component';

const routes: Routes = [
  {path: '', component: MaintenancePersonHomeComponent},
  { path: 'new', component: MaintenancePersonNewComponent },
  { path: ':id', component: MaintenancePersonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MaintenancePerson-detail-permissions'
      }
    }
  },{
    path: ':maintenance_person_id/BoatMaintenanceAssignment', loadChildren: () => import('../BoatMaintenanceAssignment/BoatMaintenanceAssignment.module').then(m => m.BoatMaintenanceAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'BoatMaintenanceAssignment-detail-permissions'
        }
    }
}
];

export const MAINTENANCEPERSON_MODULE_DECLARATIONS = [
    MaintenancePersonHomeComponent,
    MaintenancePersonNewComponent,
    MaintenancePersonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancePersonRoutingModule { }