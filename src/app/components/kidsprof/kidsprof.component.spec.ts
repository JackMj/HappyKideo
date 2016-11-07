/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KidsprofComponent } from './kidsprof.component';

describe('KidsprofComponent', () => {
  let component: KidsprofComponent;
  let fixture: ComponentFixture<KidsprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
