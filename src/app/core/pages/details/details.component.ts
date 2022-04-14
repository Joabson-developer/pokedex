import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FetchPokemonsService } from 'src/app/service/fetch-pokemons.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public maxStat: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchPokemonsService: FetchPokemonsService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.fetchPokemonsService.apiGetPokemons(
      `${this.urlPokemon}/${id}`
    );
    const name = this.fetchPokemonsService.apiGetPokemons(
      `${this.urlName}/${id}`
    );

    return forkJoin([pokemon, name]).subscribe((res) => {
      this.pokemon = res;
      this.maxStat = this.getMaxStat(this.pokemon[0].stats);
    });
  }

  public getMaxStat(stats: any) {
    return stats.reduce((acc: number, value: any) => {
      return value.base_stat > acc ? (acc = value.base_stat) : acc;
    }, 0);
  }
}
