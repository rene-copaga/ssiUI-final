import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerComponent } from './worker/worker.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';
import { RolComponent } from './rol/rol.component';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HeaderComponent,
    ProjectsComponent,
    WorkersComponent,
    WorkerComponent,
    ActivitiesComponent,
    ActivityComponent,
    RolComponent,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
