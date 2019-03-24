import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rol} from '../shared/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return <Observable<Rol[]>> this.http.get('http://localhost:8080/roles/sp');
  }

  createRol(rol: Rol): Observable<any> {
    return <Observable<any>> this.http.post('http://localhost:8080/roles/sp', rol);
  }

  updateRol(rol: Rol): Observable<any> {
    return <Observable<any>> this.http.put('http://localhost:8080/roles/sp', rol);
  }

  deleteRol(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete('http://localhost:8080/roles/sp/' + id);
  }
}
