import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'mission/:flight_number', component: MissiondetailsComponent }
];
