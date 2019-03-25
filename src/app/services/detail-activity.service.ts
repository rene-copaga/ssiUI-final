import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DetailActivity} from '../shared/DetailActivity';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DetailActivityService {

  constructor(private http: HttpClient) { }

  getDetailActivity(id: number): Observable<DetailActivity> {
    return <Observable<DetailActivity>> this.http.get(baseURL + 'detailActivities/' + id);
  }

  getDetailActivities(): Observable<DetailActivity[]> {
    return <Observable<DetailActivity[]>> this.http.get(baseURL + 'detailActivities');
  }

  createDetailActivity(project: DetailActivity): Observable<any> {
    return <Observable<any>> this.http.post(baseURL + 'detailActivities', project);
  }

  updateDetailActivity(project: DetailActivity): Observable<any> {
    return <Observable<any>> this.http.put(baseURL + 'detailActivities', project);
  }

  deleteDetailActivity(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'detailActivities/' + id);
  }
}
