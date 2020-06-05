import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhome2ComponentComponent } from './childhome2-component.component';

describe('Childhome2ComponentComponent', () => {
  let component: Childhome2ComponentComponent;
  let fixture: ComponentFixture<Childhome2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childhome2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhome2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
