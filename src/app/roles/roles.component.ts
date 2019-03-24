import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {ProjectComponent} from '../project/project.component';
import {Rol} from '../shared/Rol';
import {RolService} from '../services/rol.service';
import {RolComponent} from '../rol/rol.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  dataSource: RolDataSource | null;
  displayedColumns = ['id', 'name', 'actions'];

  constructor(public rolService: RolService,
              public dialog: MatDialog) {
    this.loadData();
  }

  ngOnInit() {
  }

  addNew(rol: Rol) {
    const dialogRef = this.dialog.open(RolComponent, {
      data: {rol: rol }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  edit(id: Number, name: String) {
    const dialogRef = this.dialog.open(RolComponent, {
      data: {id: id, name: name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.rolService.deleteRol(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new RolDataSource(this.rolService);
  }

}

export class RolDataSource extends DataSource<Rol> {

  rolService: RolService

  constructor(rolService: RolService) {
    super();
    this.rolService = rolService;
  }

  connect(): Observable<Rol[]> {
    return this.rolService.getRoles();
  }

  disconnect(): void {
  }

}

