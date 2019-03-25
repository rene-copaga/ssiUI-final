import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Assignation} from '../shared/Assignation';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class AssignationService {

  constructor(private http: HttpClient) { }

  getAssignations(): Observable<Assignation[]> {
    return <Observable<Assignation[]>> this.http.get(baseURL + 'asignations');
  }

  createAssignation(assignation: Assignation): Observable<Assignation> {
    return <Observable<Assignation>> this.http.post(baseURL + 'asignations', assignation);
  }

  updateAssignation(assignation: Assignation): Observable<Assignation> {
    return <Observable<Assignation>> this.http.put(baseURL + 'asignations', assignation);
  }

  deleteAssignation(id: Number): Observable<Assignation> {
    return <Observable<Assignation>> this.http.delete(baseURL + 'asignations/' + id);
  }
}
