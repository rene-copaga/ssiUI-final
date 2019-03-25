import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
  MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { ProjectActivityDialogComponent } from './project-activity-dialog/project-activity-dialog.component';
import { ProjectWorkerComponent } from './project-worker/project-worker.component';
import { ProjectWorkerDialogComponent } from './project-worker-dialog/project-worker-dialog.component';

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
    HomeComponent,
    ProjectActivityComponent,
    ProjectActivityDialogComponent,
    ProjectWorkerComponent,
    ProjectWorkerDialogComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, AppRoutingModule, HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [
    ProjectComponent,
    RolComponent,
    WorkerComponent,
    ActivityComponent,
    ProjectActivityDialogComponent,
    ProjectWorkerDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
