import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1RoutingComponent } from './ex1-routing.component';

describe('Ex1RoutingComponent', () => {
  let component: Ex1RoutingComponent;
  let fixture: ComponentFixture<Ex1RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
