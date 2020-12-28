import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2SelectorComponent } from './ex2-selector.component';

describe('Ex2SelectorComponent', () => {
  let component: Ex2SelectorComponent;
  let fixture: ComponentFixture<Ex2SelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2SelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
