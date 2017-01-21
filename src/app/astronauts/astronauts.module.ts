import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import {AstronautsComponent} from './astronauts.component';
import {routing} from './astronauts.router';

import {
  DataTableModule,
  SharedModule as PrimeSharedModule,
  ButtonModule,
  DialogModule,
  InputTextModule,
  CalendarModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    PrimeSharedModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule
  ],
  declarations: [
    AstronautsComponent
  ],
  bootstrap: [
    AstronautsComponent
  ]
})
export class AstronautsModule {
}
