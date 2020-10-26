import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  response: SearchResponse;
  searchCategories = [
    { id: '1', name: 'Users' }
  ];

  private onDestroy$ = new Subject<void>();
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchTerms.pipe(
      takeUntil(this.onDestroy$),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchUsers(term))
    ).subscribe(response => this.response = response);

    if (isDevMode()) {
      this.searchTerms.next('octocat');
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
