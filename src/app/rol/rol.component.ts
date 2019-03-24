import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Rol} from '../shared/Rol';
import {RolService} from '../services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public dialogRef: MatDialogRef<RolComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Rol,
              public rolService: RolService) { }

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
      this.rolService.createRol(this.data).subscribe(any => console.log(any));
    } else {
      this.rolService.updateRol(this.data).subscribe(any => console.log(any));
    }
  }

}
