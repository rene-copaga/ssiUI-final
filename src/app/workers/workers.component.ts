import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Worker} from '../shared/Worker';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {WorkerService} from '../services/worker.service';
import {WorkerComponent} from '../worker/worker.component';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  dataSource: WorkerDataSource | null;
  displayedColumns = ['id', 'firstName', 'lastName', 'hiringDate', 'idRol', 'actions'];

  constructor(public workerService: WorkerService,
              public dialog: MatDialog) {
    this.loadData();
  }

  ngOnInit() {
  }

  addNew(worker: Worker) {
    const dialogRef = this.dialog.open(WorkerComponent, {
      data: {worker: worker }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  edit(id: Number, firstName: String, lastName: String, hiringDate: Date, idRol: number) {
    const dialogRef = this.dialog.open(WorkerComponent, {
      data: {id: id, firstName: firstName, lastName: lastName, hiringDate: hiringDate, idRol: idRol}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.workerService.deleteWorker(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new WorkerDataSource(this.workerService);

  }

}

export class WorkerDataSource extends DataSource<Worker> {

  workerService: WorkerService;

  constructor(workerService: WorkerService) {
    super();
    this.workerService = workerService;
  }

  connect(): Observable<Worker[]> {
    return this.workerService.getWorkers();
  }

  disconnect(): void {
  }

}
