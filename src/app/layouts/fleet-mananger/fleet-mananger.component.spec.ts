import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManangerComponent } from './fleet-mananger.component';

describe('FleetManangerComponent', () => {
  let component: FleetManangerComponent;
  let fixture: ComponentFixture<FleetManangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetManangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetManangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
