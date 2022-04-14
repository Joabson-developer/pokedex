import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  @Input() min: any = 0;
  @Input() max: any = 0;

  constructor() {}

  ngOnInit(): void {}
}
