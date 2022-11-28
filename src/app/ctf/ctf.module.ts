import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtfRoutingModule } from './ctf-routing.module';
import { Ctf1Component } from './ctf1/ctf1.component';


@NgModule({
  declarations: [
    Ctf1Component
  ],
  imports: [
    CommonModule,
    CtfRoutingModule
  ]
})
export class CtfModule { }
