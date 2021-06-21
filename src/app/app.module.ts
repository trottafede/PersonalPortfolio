import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router"
// components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
{ path: "", component: ProjectsComponent } ,
{ path: "CodeProjects", component: ProjectsComponent } ,
{ path: "WorkExperience", component: WorkExperienceComponent } ,
{ path: "Education", component: EducationComponent } ,
{ path: "AboutMe", component: AboutMeComponent } ,
{ path: "Contact", component: ContactComponent } ,
];


@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, MainContentComponent, SideBarComponent, AboutMeComponent, ProjectsComponent, EducationComponent, WorkExperienceComponent, ContactComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
