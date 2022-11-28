import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtfRoutingModule } from './ctf-routing.module';
import { Ctf1Component } from './ctf1/ctf1.component';
import { CtfDashboardComponent } from './ctf-dashboard/ctf-dashboard.component';


@NgModule({
  declarations: [
    Ctf1Component,
    CtfDashboardComponent
  ],
  imports: [
    CommonModule,
    CtfRoutingModule
  ]
})
export class CtfModule { }
