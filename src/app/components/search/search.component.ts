import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  user: User;

  private onDestroy = new Subject<void>();
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchUsers(term))
    ).subscribe(response => this.user = response);
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
