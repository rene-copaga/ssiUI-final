import { Injectable } from '@angular/core';
import {Project} from '../shared/Project';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<Project> {
    return <Observable<Project>> this.http.get(baseURL + 'projects/' + id);
  }

  getProjects(): Observable<Project[]> {
    return <Observable<Project[]>> this.http.get(baseURL + 'projects');
  }

  createProject(project: Project): Observable<any> {
    return <Observable<any>> this.http.post(baseURL + 'projects', project);
  }

  updateProject(project: Project): Observable<any> {
    return <Observable<any>> this.http.put(baseURL + 'projects', project);
  }

  deleteProject(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'projects/' + id);
  }
}
