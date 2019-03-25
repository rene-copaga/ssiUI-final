import {Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {DetailActivityService} from '../services/detail-activity.service';
import {ActivityService} from '../services/activity.service';
import {map} from 'rxjs/operators';
import {DetailActivity} from '../shared/DetailActivity';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../shared/Project';
import {ProjectActivityDialogComponent} from '../project-activity-dialog/project-activity-dialog.component';

@Component({
  selector: 'app-project-activity',
  templateUrl: './project-activity.component.html',
  styleUrls: ['./project-activity.component.scss']
})
export class ProjectActivityComponent implements OnInit {

  dataSource: ProjectActivityDataSource | null;
  displayedColumns = ['id', 'idActivity', 'workers', 'actions'];
  projectId: number;
  project: Project;
  activities: {[id: number]: string; } = {};

  constructor(public projectService: ProjectService,
              public activityService: ActivityService,
              public detailActivityService: DetailActivityService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.projectId = +this.route.snapshot.params['id'];
    this.projectService.getProject(this.projectId).subscribe(project => this.project = project);
  }

  ngOnInit() {
    this.activityService.getActivities().subscribe(
      activities => activities.map(activity => this.activities[activity.id] = activity.activityName )
    );
    this.loadData();
  }

  addNew(idProject: number, projectName: String) {
    const dialogRef = this.dialog.open(ProjectActivityDialogComponent, {
      data: {idProject: idProject, projectName: projectName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  edit(id: Number, idActivity: number, activityName: String, idProject: number, projectName: String) {
    const dialogRef = this.dialog.open(ProjectActivityDialogComponent, {
      data: {id: id, idActivity: idActivity, activityName: activityName, idProject: idProject, projectName: projectName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.detailActivityService.deleteDetailActivity(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new ProjectActivityDataSource(this.projectId, this.detailActivityService);

  }

}

export class ProjectActivityDataSource extends DataSource<DetailActivity> {

  constructor(public projectId: number,
              public detailActivityService: DetailActivityService) {
    super();
  }

  connect(): Observable<DetailActivity[]> {
    return this.detailActivityService.getDetailActivities().pipe(
      map(detailActivities => detailActivities.filter(detailActivity => detailActivity.idProject === this.projectId)));
  }

  disconnect(): void {
  }

}
