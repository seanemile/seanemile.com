import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtfDashboardComponent } from './ctf-dashboard/ctf-dashboard.component';
import { Ctf1Component } from './ctf1/ctf1.component';

const routes: Routes = [
  { path: 'ctf1', component: Ctf1Component },
  { path: 'ctfs', component: CtfDashboardComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtfRoutingModule {}
