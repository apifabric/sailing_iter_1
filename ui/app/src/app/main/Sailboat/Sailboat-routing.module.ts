import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SailboatHomeComponent } from './home/Sailboat-home.component';
import { SailboatNewComponent } from './new/Sailboat-new.component';
import { SailboatDetailComponent } from './detail/Sailboat-detail.component';

const routes: Routes = [
  {path: '', component: SailboatHomeComponent},
  { path: 'new', component: SailboatNewComponent },
  { path: ':id', component: SailboatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Sailboat-detail-permissions'
      }
    }
  },{
    path: ':sailboat_id/BoatEquipment', loadChildren: () => import('../BoatEquipment/BoatEquipment.module').then(m => m.BoatEquipmentModule),
    data: {
        oPermission: {
            permissionId: 'BoatEquipment-detail-permissions'
        }
    }
},{
    path: ':sailboat_id/BoatMaintenanceAssignment', loadChildren: () => import('../BoatMaintenanceAssignment/BoatMaintenanceAssignment.module').then(m => m.BoatMaintenanceAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'BoatMaintenanceAssignment-detail-permissions'
        }
    }
},{
    path: ':sailboat_id/RacingSchedule', loadChildren: () => import('../RacingSchedule/RacingSchedule.module').then(m => m.RacingScheduleModule),
    data: {
        oPermission: {
            permissionId: 'RacingSchedule-detail-permissions'
        }
    }
},{
    path: ':sailboat_id/SailingEvent', loadChildren: () => import('../SailingEvent/SailingEvent.module').then(m => m.SailingEventModule),
    data: {
        oPermission: {
            permissionId: 'SailingEvent-detail-permissions'
        }
    }
},{
    path: ':sailboat_id/ServiceSchedule', loadChildren: () => import('../ServiceSchedule/ServiceSchedule.module').then(m => m.ServiceScheduleModule),
    data: {
        oPermission: {
            permissionId: 'ServiceSchedule-detail-permissions'
        }
    }
}
];

export const SAILBOAT_MODULE_DECLARATIONS = [
    SailboatHomeComponent,
    SailboatNewComponent,
    SailboatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SailboatRoutingModule { }