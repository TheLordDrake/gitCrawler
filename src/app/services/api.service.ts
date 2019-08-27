import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RawUser } from '../models/raw-user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private rootUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getRequest(route: string): Observable<RawUser> {
    return this.http.get<RawUser>(this.rootUrl + route);
  }
}
