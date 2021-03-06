/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PantryComponent } from './pantry.component';

describe('PantryComponent', () => {
  let component: PantryComponent;
  let fixture: ComponentFixture<PantryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
