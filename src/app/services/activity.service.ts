import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../shared/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(id: number): Observable<Activity> {
    return <Observable<Activity>> this.http.get('http://localhost:8080/activities/' + id);
  }

  getActivities(): Observable<Activity[]> {
    return <Observable<Activity[]>> this.http.get('http://localhost:8080/activities/sp');
  }

  createActivity(activity: Activity): Observable<any> {
    return <Observable<any>> this.http.post('http://localhost:8080/activities/sp', activity);
  }

  updateActivity(activity: Activity): Observable<any> {
    return <Observable<any>> this.http.put('http://localhost:8080/activities/sp', activity);
  }

  deleteActivity(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete('http://localhost:8080/activities/sp/' + id);
  }
}
