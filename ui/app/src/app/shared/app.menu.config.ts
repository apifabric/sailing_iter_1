import { MenuRootItem } from 'ontimize-web-ngx';

import { BoatEquipmentCardComponent } from './BoatEquipment-card/BoatEquipment-card.component';

import { BoatMaintenanceAssignmentCardComponent } from './BoatMaintenanceAssignment-card/BoatMaintenanceAssignment-card.component';

import { CampAttendanceCardComponent } from './CampAttendance-card/CampAttendance-card.component';

import { CampPriceListCardComponent } from './CampPriceList-card/CampPriceList-card.component';

import { EquipmentCardComponent } from './Equipment-card/Equipment-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { InstructorCardComponent } from './Instructor-card/Instructor-card.component';

import { JuniorCamperCardComponent } from './JuniorCamper-card/JuniorCamper-card.component';

import { MaintenancePersonCardComponent } from './MaintenancePerson-card/MaintenancePerson-card.component';

import { RacingScheduleCardComponent } from './RacingSchedule-card/RacingSchedule-card.component';

import { SailboatCardComponent } from './Sailboat-card/Sailboat-card.component';

import { SailingEventCardComponent } from './SailingEvent-card/SailingEvent-card.component';

import { ServiceScheduleCardComponent } from './ServiceSchedule-card/ServiceSchedule-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'BoatEquipment', name: 'BOATEQUIPMENT', icon: 'view_list', route: '/main/BoatEquipment' }
    
        ,{ id: 'BoatMaintenanceAssignment', name: 'BOATMAINTENANCEASSIGNMENT', icon: 'view_list', route: '/main/BoatMaintenanceAssignment' }
    
        ,{ id: 'CampAttendance', name: 'CAMPATTENDANCE', icon: 'view_list', route: '/main/CampAttendance' }
    
        ,{ id: 'CampPriceList', name: 'CAMPPRICELIST', icon: 'view_list', route: '/main/CampPriceList' }
    
        ,{ id: 'Equipment', name: 'EQUIPMENT', icon: 'view_list', route: '/main/Equipment' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'Instructor', name: 'INSTRUCTOR', icon: 'view_list', route: '/main/Instructor' }
    
        ,{ id: 'JuniorCamper', name: 'JUNIORCAMPER', icon: 'view_list', route: '/main/JuniorCamper' }
    
        ,{ id: 'MaintenancePerson', name: 'MAINTENANCEPERSON', icon: 'view_list', route: '/main/MaintenancePerson' }
    
        ,{ id: 'RacingSchedule', name: 'RACINGSCHEDULE', icon: 'view_list', route: '/main/RacingSchedule' }
    
        ,{ id: 'Sailboat', name: 'SAILBOAT', icon: 'view_list', route: '/main/Sailboat' }
    
        ,{ id: 'SailingEvent', name: 'SAILINGEVENT', icon: 'view_list', route: '/main/SailingEvent' }
    
        ,{ id: 'ServiceSchedule', name: 'SERVICESCHEDULE', icon: 'view_list', route: '/main/ServiceSchedule' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BoatEquipmentCardComponent

    ,BoatMaintenanceAssignmentCardComponent

    ,CampAttendanceCardComponent

    ,CampPriceListCardComponent

    ,EquipmentCardComponent

    ,FeedbackCardComponent

    ,InstructorCardComponent

    ,JuniorCamperCardComponent

    ,MaintenancePersonCardComponent

    ,RacingScheduleCardComponent

    ,SailboatCardComponent

    ,SailingEventCardComponent

    ,ServiceScheduleCardComponent

];