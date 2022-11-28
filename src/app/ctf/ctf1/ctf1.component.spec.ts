import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf1Component } from './ctf1.component';

describe('Ctf1Component', () => {
  let component: Ctf1Component;
  let fixture: ComponentFixture<Ctf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
