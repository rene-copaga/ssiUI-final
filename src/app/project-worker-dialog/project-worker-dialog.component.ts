import {Component, Inject, OnInit} from '@angular/core';
import {Worker} from '../shared/Worker';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectActivityDialogComponent} from '../project-activity-dialog/project-activity-dialog.component';
import {WorkerService} from '../services/worker.service';
import {AssignationService} from '../services/assignation.service';
import {Assignation} from '../shared/Assignation';

@Component({
  selector: 'app-project-worker-dialog',
  templateUrl: './project-worker-dialog.component.html',
  styleUrls: ['./project-worker-dialog.component.scss']
})
export class ProjectWorkerDialogComponent implements OnInit {

  workers: Worker[];

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public dialogRef: MatDialogRef<ProjectActivityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Assignation,
              public assignationService: AssignationService,
              public workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(workers => this.workers = workers);
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
    this.assignationService.createAssignation(this.data).subscribe(any => console.log(any));
  }

}
