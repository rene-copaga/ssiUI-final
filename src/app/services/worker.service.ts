import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Worker} from '../shared/Worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return <Observable<Worker[]>> this.http.get('http://localhost:8080/workers/sp');
  }

  createWorker(worker: Worker): Observable<any> {
    return <Observable<any>> this.http.post('http://localhost:8080/workers/sp', worker);
  }

  updateWorker(worker: Worker): Observable<any> {
    return <Observable<any>> this.http.put('http://localhost:8080/workers/sp', worker);
  }

  deleteWorker(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete('http://localhost:8080/workers/sp/' + id);
  }
}
