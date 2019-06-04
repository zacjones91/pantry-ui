/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreezerComponent } from './freezer.component';

describe('FreezerComponent', () => {
  let component: FreezerComponent;
  let fixture: ComponentFixture<FreezerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
