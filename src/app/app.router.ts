import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'astronauts'},
  {loadChildren: 'app/astronauts/astronauts.module#AstronautsModule', path: 'astronauts'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
