import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.router';
import {SharedModule} from './shared/shared.module';
import {AstronautsService} from './astronauts/astronauts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AstronautsService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
