import { Routes } from '@angular/router';
import { Simplehome } from './simplehome/simplehome';
import { Simpleform } from './simpleform/simpleform';
import { Simplegrid } from './simplegrid/simplegrid';
import { Homecontent } from './homecontent/homecontent';

export const routes: Routes = [
  {
    path: '',
    component: Simplehome,
    children: [
      { path: 'home', component: Homecontent },
      { path: 'form', component: Simpleform },
      { path: 'form/:id', component: Simpleform },
      { path: 'grid', component: Simplegrid },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
