import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ProjectsComponent} from '../projects/projects.component';
import {RolesComponent} from '../roles/roles.component';
import {ActivitiesComponent} from '../activities/activities.component';
import {WorkersComponent} from '../workers/workers.component';
import {ProjectActivityComponent} from '../project-activity/project-activity.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'roles',  component: RolesComponent },
  { path: 'activities',  component: ActivitiesComponent },
  { path: 'workers',  component: WorkersComponent },
  { path: 'projectActivities/:id',  component: ProjectActivityComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
