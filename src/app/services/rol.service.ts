import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rol} from '../shared/Rol';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return <Observable<Rol[]>> this.http.get(baseURL + 'roles');
  }

  createRol(rol: Rol): Observable<any> {
    return <Observable<any>> this.http.post(baseURL + 'roles', rol);
  }

  updateRol(rol: Rol): Observable<any> {
    return <Observable<any>> this.http.put(baseURL + 'roles', rol);
  }

  deleteRol(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'roles/' + id);
  }
}
