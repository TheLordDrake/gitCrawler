import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) { }

  searchUsers(term: string): Observable<User> {
    const searchType = 'users/';

    const rawUser = this.apiService.getRequest(searchType + term);
    const user = new User {
      id = rawUser.id;
  }
}
}
