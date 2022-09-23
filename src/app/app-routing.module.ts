import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
      { path: 'home', component: HomeComponent},
      { path: 'socials', component: SocialsComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
