import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuniorCamperHomeComponent } from './home/JuniorCamper-home.component';
import { JuniorCamperNewComponent } from './new/JuniorCamper-new.component';
import { JuniorCamperDetailComponent } from './detail/JuniorCamper-detail.component';

const routes: Routes = [
  {path: '', component: JuniorCamperHomeComponent},
  { path: 'new', component: JuniorCamperNewComponent },
  { path: ':id', component: JuniorCamperDetailComponent,
    data: {
      oPermission: {
        permissionId: 'JuniorCamper-detail-permissions'
      }
    }
  },{
    path: ':camper_id/CampAttendance', loadChildren: () => import('../CampAttendance/CampAttendance.module').then(m => m.CampAttendanceModule),
    data: {
        oPermission: {
            permissionId: 'CampAttendance-detail-permissions'
        }
    }
},{
    path: ':camper_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
}
];

export const JUNIORCAMPER_MODULE_DECLARATIONS = [
    JuniorCamperHomeComponent,
    JuniorCamperNewComponent,
    JuniorCamperDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuniorCamperRoutingModule { }