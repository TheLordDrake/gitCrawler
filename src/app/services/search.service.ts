import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RawUser } from '../models/raw-user.model';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) { }

  searchUsers(term: string): Observable<User> {
    const searchType = 'users/';

    return this.apiService.getRequest(searchType + term)
      .pipe(map<RawUser, User>(rawUser => new User(rawUser)));
  }
}
