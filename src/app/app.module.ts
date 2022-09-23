import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Project Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsComponent } from './navigations/navigations.component';
import { HomeComponent } from './home/home.component';
import { SocialsComponent } from './socials/socials.component';
import { ProjectsComponent } from './projects/projects.component';

// Angular Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService} from '@angular/fire/analytics';
import { MaterialModule } from './shared/material.module';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    HomeComponent,
    SocialsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    AppRoutingModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    BrowserAnimationsModule,
  ],
  providers: [
   ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
