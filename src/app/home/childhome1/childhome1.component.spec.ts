import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhome1Component } from './childhome1.component';

describe('Childhome1Component', () => {
  let component: Childhome1Component;
  let fixture: ComponentFixture<Childhome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childhome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
