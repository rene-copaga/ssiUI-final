import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Activity} from '../shared/Activity';
import {DetailActivity} from '../shared/DetailActivity';
import {ActivityService} from '../services/activity.service';
import {DetailActivityService} from '../services/detail-activity.service';

@Component({
  selector: 'app-project-activity-dialog',
  templateUrl: './project-activity-dialog.component.html',
  styleUrls: ['./project-activity-dialog.component.scss']
})
export class ProjectActivityDialogComponent implements OnInit {

  activities: Activity[];

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public dialogRef: MatDialogRef<ProjectActivityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DetailActivity,
              public detailActivityService: DetailActivityService,
              public activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivities().subscribe(activities => this.activities = activities);
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAddUpdate(): void {
    if (this.data.id) {
      this.detailActivityService.createDetailActivity(this.data).subscribe(any => console.log(any));
    } else {
      this.detailActivityService.updateDetailActivity(this.data).subscribe(any => console.log(any));
    }
  }

}
