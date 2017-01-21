import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AstronautsComponent} from './astronauts.component';

const routes: Route[] = [
  {
    path: '',
    component: AstronautsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
