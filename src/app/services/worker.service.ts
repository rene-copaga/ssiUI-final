import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from '../shared/Worker';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return <Observable<Worker[]>> this.http.get(baseURL + 'workers');
  }

  createWorker(worker: Worker): Observable<any> {
    return <Observable<any>> this.http.post(baseURL + 'workers', worker);
  }

  updateWorker(worker: Worker): Observable<any> {
    return <Observable<any>> this.http.put(baseURL + 'workers', worker);
  }

  deleteWorker(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'workers/' + id);
  }
}
