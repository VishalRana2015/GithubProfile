import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    PortfolioComponent,
    SkillsComponent,
    ResumeComponent,
    WhyMeComponent,
    ContactComponent,
    ScrollSpyDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
