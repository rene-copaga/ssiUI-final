import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ActivityService} from '../services/activity.service';
import {Activity} from '../shared/Activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public dialogRef: MatDialogRef<ActivityComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Activity,
              public activityService: ActivityService) { }

  ngOnInit() {
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
      this.activityService.createActivity(this.data).subscribe(any => console.log(any));
    } else {
      this.activityService.updateActivity(this.data).subscribe(any => console.log(any));
    }
  }

}
