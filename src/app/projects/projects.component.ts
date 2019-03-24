import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Project} from '../shared/Project';
import {ProjectService} from '../services/project.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {ProjectComponent} from '../project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  dataSource: ProjectDataSource | null;
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(public projectService: ProjectService,
              public dialog: MatDialog) {
    this.loadData();
  }

  ngOnInit() {
  }

  addNew(project: Project) {
    const dialogRef = this.dialog.open(ProjectComponent, {
      data: {project: project }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  edit(id: Number, name: String, description: String) {
    const dialogRef = this.dialog.open(ProjectComponent, {
      data: {id: id, name: name, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  delete(id: Number) {
    this.projectService.deleteProject(id).subscribe(
      any => {console.log(any); this.loadData(); }
    );
  }

  loadData() {
    this.dataSource = new ProjectDataSource(this.projectService);

  }

}

export class ProjectDataSource extends DataSource<Project> {

  projectService: ProjectService

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  connect(): Observable<Project[]> {
    return this.projectService.getProjects();
  }

  disconnect(): void {
  }

}
