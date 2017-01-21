/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {AstronautsComponent} from './astronauts.component';
import {LoaderComponent} from '../shared/loader/loader.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  DataTableModule,
  SharedModule as PrimeSharedModule,
  ButtonModule,
  DialogModule,
  InputTextModule,
  CalendarModule
} from 'primeng/primeng';

import {AstronautsService} from './astronauts.service';
import {HttpModule} from '@angular/http';

describe('AstronautsComponent', () => {
  let component: AstronautsComponent;
  let fixture: ComponentFixture<AstronautsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AstronautsComponent,
        LoaderComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
        PrimeSharedModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        HttpModule
      ],
      providers: [
        AstronautsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
