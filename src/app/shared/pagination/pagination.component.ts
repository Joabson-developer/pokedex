import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() public backPage!: string;
  @Input() public nextPage!: string;
  @Output() public emmitSelect: EventEmitter<string> = new EventEmitter();
  @Output() public emmitClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public changeSelect(self: HTMLSelectElement) {
    this.emmitSelect.emit(self.value);
  }

  public buttonClick(newPage: string) {
    this.emmitClick.emit(newPage);
  }
}
