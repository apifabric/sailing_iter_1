import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatEquipmentHomeComponent } from './home/BoatEquipment-home.component';
import { BoatEquipmentNewComponent } from './new/BoatEquipment-new.component';
import { BoatEquipmentDetailComponent } from './detail/BoatEquipment-detail.component';

const routes: Routes = [
  {path: '', component: BoatEquipmentHomeComponent},
  { path: 'new', component: BoatEquipmentNewComponent },
  { path: ':id', component: BoatEquipmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BoatEquipment-detail-permissions'
      }
    }
  }
];

export const BOATEQUIPMENT_MODULE_DECLARATIONS = [
    BoatEquipmentHomeComponent,
    BoatEquipmentNewComponent,
    BoatEquipmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatEquipmentRoutingModule { }