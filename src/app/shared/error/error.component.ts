import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message-error-interface';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() messageError!: Message;
  constructor() {}

  ngOnInit(): void {}
}
