import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/Project';
import {ProjectService} from '../services/project.service';
import {ActivityService} from '../services/activity.service';
import {DetailActivityService} from '../services/detail-activity.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ProjectActivityDialogComponent} from '../project-activity-dialog/project-activity-dialog.component';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Assignation} from '../shared/Assignation';
import {AssignationService} from '../services/assignation.service';
import {WorkerService} from '../services/worker.service';
import {ProjectWorkerDialogComponent} from '../project-worker-dialog/project-worker-dialog.component';
import {DetailActivity} from '../shared/DetailActivity';
import {Activity} from '../shared/Activity';

@Component({
  selector: 'app-project-worker',
  templateUrl: './project-worker.component.html',
  styleUrls: ['./project-worker.component.scss']
})
export class ProjectWorkerComponent implements OnInit {

  dataSource: ProjectWorkerDataSource | null;
  displayedColumns = ['id', 'idWorker', 'actions'];
  projectId: number;
  project: Project;
  detailActivityId: number;
  activity: Activity;
  workers: {[id: number]: string; } = {};

  constructor(public projectService: ProjectService,
              public activityService: ActivityService,
              public detailActivityService: DetailActivityService,
              public assignationService: AssignationService,
              public workerService: WorkerService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.projectId = +this.route.snapshot.params['idProject'];
    this.projectService.getProject(this.projectId).subscribe(project => this.project = project);
    this.detailActivityId = +this.route.snapshot.params['idDetailActivity'];
    this.detailActivityService.getDetailActivity(this.detailActivityId).subscribe(detailActivity => {
      this.activityService.getActivity(detailActivity.idActivity).subscribe(activity => this.activity = activity);
    });
  }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(
      workers => workers.map(worker => this.workers[worker.id] = worker.firstName + ' ' + worker.lastName )
    );
    this.loadData();
  }

  addNew(projectName: String, idDetailActivity: number) {
    const dialogRef = this.dialog.open(ProjectWorkerDialogComponent, {
      data: {projectName: projectName, activityName: this.activity.activityName, idDetailActivity: idDetailActivity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.assignationService.deleteAssignation(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new ProjectWorkerDataSource(this.detailActivityId, this.assignationService);

  }

}

export class ProjectWorkerDataSource extends DataSource<Assignation> {

  constructor(public detailActivityId: number,
              public assignationService: AssignationService) {
    super();
  }

  connect(): Observable<Assignation[]> {
    return this.assignationService.getAssignations().pipe(
      map(assignations => assignations.filter(assignation => assignation.idDetailActivity === this.detailActivityId)));
  }

  disconnect(): void {
  }

}
