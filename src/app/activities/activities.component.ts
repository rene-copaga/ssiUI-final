import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {ActivityService} from '../services/activity.service';
import {Activity} from '../shared/Activity';
import {ActivityComponent} from '../activity/activity.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  dataSource: ActivityDataSource | null;
  displayedColumns = ['id', 'activityName', 'actions'];

  constructor(public activityService: ActivityService,
              public dialog: MatDialog) {
    this.loadData();
  }

  ngOnInit() {
  }

  addNew(activity: Activity) {
    const dialogRef = this.dialog.open(ActivityComponent, {
      data: {activity: activity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  edit(id: Number, activityName: String) {
    const dialogRef = this.dialog.open(ActivityComponent, {
      data: {id: id, activityName: activityName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.activityService.deleteActivity(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new ActivityDataSource(this.activityService);
  }

}

export class ActivityDataSource extends DataSource<Activity> {

  activityService: ActivityService

  constructor(activityService: ActivityService) {
    super();
    this.activityService = activityService;
  }

  connect(): Observable<Activity[]> {
    return this.activityService.getActivities();
  }

  disconnect(): void {
  }

}
