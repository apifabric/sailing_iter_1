import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'BoatEquipment', loadChildren: () => import('./BoatEquipment/BoatEquipment.module').then(m => m.BoatEquipmentModule) },
    
        { path: 'BoatMaintenanceAssignment', loadChildren: () => import('./BoatMaintenanceAssignment/BoatMaintenanceAssignment.module').then(m => m.BoatMaintenanceAssignmentModule) },
    
        { path: 'CampAttendance', loadChildren: () => import('./CampAttendance/CampAttendance.module').then(m => m.CampAttendanceModule) },
    
        { path: 'CampPriceList', loadChildren: () => import('./CampPriceList/CampPriceList.module').then(m => m.CampPriceListModule) },
    
        { path: 'Equipment', loadChildren: () => import('./Equipment/Equipment.module').then(m => m.EquipmentModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'Instructor', loadChildren: () => import('./Instructor/Instructor.module').then(m => m.InstructorModule) },
    
        { path: 'JuniorCamper', loadChildren: () => import('./JuniorCamper/JuniorCamper.module').then(m => m.JuniorCamperModule) },
    
        { path: 'MaintenancePerson', loadChildren: () => import('./MaintenancePerson/MaintenancePerson.module').then(m => m.MaintenancePersonModule) },
    
        { path: 'RacingSchedule', loadChildren: () => import('./RacingSchedule/RacingSchedule.module').then(m => m.RacingScheduleModule) },
    
        { path: 'Sailboat', loadChildren: () => import('./Sailboat/Sailboat.module').then(m => m.SailboatModule) },
    
        { path: 'SailingEvent', loadChildren: () => import('./SailingEvent/SailingEvent.module').then(m => m.SailingEventModule) },
    
        { path: 'ServiceSchedule', loadChildren: () => import('./ServiceSchedule/ServiceSchedule.module').then(m => m.ServiceScheduleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }