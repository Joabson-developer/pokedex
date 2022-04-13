import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public search(self: string) {
    this.emmitSearch.emit(self);
  }
}
