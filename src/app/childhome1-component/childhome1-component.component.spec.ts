import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childhome1ComponentComponent } from './childhome1-component.component';

describe('Childhome1ComponentComponent', () => {
  let component: Childhome1ComponentComponent;
  let fixture: ComponentFixture<Childhome1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childhome1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childhome1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
