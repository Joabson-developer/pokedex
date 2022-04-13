import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);

    return;
  }
}
