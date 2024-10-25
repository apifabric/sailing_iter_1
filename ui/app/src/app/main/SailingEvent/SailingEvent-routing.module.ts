import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SailingEventHomeComponent } from './home/SailingEvent-home.component';
import { SailingEventNewComponent } from './new/SailingEvent-new.component';
import { SailingEventDetailComponent } from './detail/SailingEvent-detail.component';

const routes: Routes = [
  {path: '', component: SailingEventHomeComponent},
  { path: 'new', component: SailingEventNewComponent },
  { path: ':id', component: SailingEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SailingEvent-detail-permissions'
      }
    }
  }
];

export const SAILINGEVENT_MODULE_DECLARATIONS = [
    SailingEventHomeComponent,
    SailingEventNewComponent,
    SailingEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SailingEventRoutingModule { }