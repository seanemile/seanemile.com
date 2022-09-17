import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Project Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DonateComponent } from './donate/donate.component';

// Angular Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService} from '@angular/fire/analytics';
import { MaterialModule } from './shared/material.module';
import { NavigationsComponent } from './navigations/navigations.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactsComponent,
    DonateComponent,
    NavigationsComponent,
  ],
  imports: [
    BrowserModule,
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
