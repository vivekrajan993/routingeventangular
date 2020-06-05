import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhome2Component } from './childhome2.component';

describe('Childhome2Component', () => {
  let component: Childhome2Component;
  let fixture: ComponentFixture<Childhome2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childhome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
