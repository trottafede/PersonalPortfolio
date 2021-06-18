import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, MainContentComponent, SideBarComponent, AboutMeComponent, ProjectsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
