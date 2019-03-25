import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Assignation} from '../shared/Assignation';

@Injectable({
  providedIn: 'root'
})
export class AssignationService {

  constructor(private http: HttpClient) { }

  getAssignations(): Observable<Assignation[]> {
    return <Observable<Assignation[]>> this.http.get('http://localhost:8080/asignations/sp');
  }

  createAssignation(assignation: Assignation): Observable<Assignation> {
    return <Observable<Assignation>> this.http.post('http://localhost:8080/asignations/sp', assignation);
  }

  updateAssignation(assignation: Assignation): Observable<Assignation> {
    return <Observable<Assignation>> this.http.put('http://localhost:8080/asignations/sp', assignation);
  }

  deleteAssignation(id: Number): Observable<Assignation> {
    return <Observable<Assignation>> this.http.delete('http://localhost:8080/asignations/sp/' + id);
  }
}
