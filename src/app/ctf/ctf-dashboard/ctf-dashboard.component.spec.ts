import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtfDashboardComponent } from './ctf-dashboard.component';

describe('CtfDashboardComponent', () => {
  let component: CtfDashboardComponent;
  let fixture: ComponentFixture<CtfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtfDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
