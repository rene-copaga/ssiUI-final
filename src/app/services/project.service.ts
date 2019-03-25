import { Injectable } from '@angular/core';
import {Project} from '../shared/Project';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<Project> {
    return <Observable<Project>> this.http.get('http://localhost:8080/projects/' + id);
  }

  getProjects(): Observable<Project[]> {
    return <Observable<Project[]>> this.http.get('http://localhost:8080/projects/sp');
  }

  createProject(project: Project): Observable<any> {
    return <Observable<any>> this.http.post('http://localhost:8080/projects/sp', project);
  }

  updateProject(project: Project): Observable<any> {
    return <Observable<any>> this.http.put('http://localhost:8080/projects/sp', project);
  }

  deleteProject(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete('http://localhost:8080/projects/sp/' + id);
  }
}
