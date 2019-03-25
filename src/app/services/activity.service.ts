import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../shared/Activity';
import {baseURL} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(id: number): Observable<Activity> {
    return <Observable<Activity>> this.http.get(baseURL + 'activities/' + id);
  }

  getActivities(): Observable<Activity[]> {
    return <Observable<Activity[]>> this.http.get(baseURL + 'activities');
  }

  createActivity(activity: Activity): Observable<any> {
    return <Observable<any>> this.http.post(baseURL + 'activities', activity);
  }

  updateActivity(activity: Activity): Observable<any> {
    return <Observable<any>> this.http.put(baseURL + 'activities', activity);
  }

  deleteActivity(id: Number): Observable<any> {
    return <Observable<any>> this.http.delete(baseURL + 'activities/' + id);
  }
}
