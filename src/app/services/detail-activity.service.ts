import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DetailActivity} from '../shared/DetailActivity';

@Injectable({
  providedIn: 'root'
})
export class DetailActivityService {

  constructor(private http: HttpClient) { }

  getDetailActivity(id: number): Observable<DetailActivity> {
    return <Observable<DetailActivity>> this.http.get('http://localhost:8080/detailActivities/' + id);
  }

  getDetailActivities(): Observable<DetailActivity[]> {
    return <Observable<DetailActivity[]>> this.http.get('http://localhost:8080/detailActivities/sp');
  }

  createDetailActivity(project: DetailActivity): Observable<any> {
    return <Observable<any>> this.http.post('http://localhost:8080/detailActivities/sp', project);
  }

  updateDetailActivity(project: DetailActivity): Observable<any> {
    return <Observable<any>> this.http.put('http://localhost:8080/detailActivities/sp', project);
  }

  deleteDetailActivity(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete('http://localhost:8080/detailActivities/sp/' + id);
  }
}
