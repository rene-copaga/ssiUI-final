import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Worker} from '../shared/Worker';
import {WorkerService} from '../services/worker.service';
import {Rol} from '../shared/Rol';
import {RolService} from '../services/rol.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  roles: Rol[];

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public dialogRef: MatDialogRef<WorkerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Worker,
              public workerService: WorkerService,
              public rolService: RolService) { }

  ngOnInit() {
    this.rolService.getRoles().subscribe(roles => this.roles = roles);
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
      this.workerService.createWorker(this.data).subscribe(any => console.log(any));
    } else {
      this.workerService.updateWorker(this.data).subscribe(any => console.log(any));
    }
  }

}
