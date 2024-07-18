import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

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
import { ReadmeComponent } from './projects/readme/readme.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { ProjectsComponent } from './projects/projects.component';
import { AwardComponent } from './why-me/award/award.component';

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
    ReadmeComponent,
    SkillCardComponent,
    ContactComponent,
    ScrollSpyDirective,
    ProjectsComponent,
    AwardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
