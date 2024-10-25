import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampPriceListHomeComponent } from './home/CampPriceList-home.component';
import { CampPriceListNewComponent } from './new/CampPriceList-new.component';
import { CampPriceListDetailComponent } from './detail/CampPriceList-detail.component';

const routes: Routes = [
  {path: '', component: CampPriceListHomeComponent},
  { path: 'new', component: CampPriceListNewComponent },
  { path: ':id', component: CampPriceListDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CampPriceList-detail-permissions'
      }
    }
  },{
    path: ':price_list_id/CampAttendance', loadChildren: () => import('../CampAttendance/CampAttendance.module').then(m => m.CampAttendanceModule),
    data: {
        oPermission: {
            permissionId: 'CampAttendance-detail-permissions'
        }
    }
}
];

export const CAMPPRICELIST_MODULE_DECLARATIONS = [
    CampPriceListHomeComponent,
    CampPriceListNewComponent,
    CampPriceListDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampPriceListRoutingModule { }