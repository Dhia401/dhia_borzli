import { Routes } from '@angular/router';
import { ConferenceList } from './conference-list';
import { Home } from './home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'conferences', component: ConferenceList },
];
