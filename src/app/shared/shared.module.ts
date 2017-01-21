import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {LoaderComponent} from './loader/loader.component';
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule
  ],
  exports: [
    LoaderComponent,
    SimpleNotificationsModule
  ]
})

export class SharedModule {
}
