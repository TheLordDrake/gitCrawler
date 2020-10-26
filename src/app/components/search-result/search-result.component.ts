import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  model: SearchResponse;

  constructor() { }

  ngOnInit() {
  }

}
