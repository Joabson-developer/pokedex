import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message-error-interface';
import { FetchPokemonsService } from 'src/app/service/fetch-pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private setPokemons: any;
  public getPokemons: any;
  public backPage!: string;
  public nextPage!: string;
  public hasError!: boolean;
  public messageError!: Message;

  constructor(private fetchPokemonsService: FetchPokemonsService) {}

  ngOnInit(): void {
    this.messageError = {
      title: 'Nenhum',
      description: 'Pokemon encontrado!',
    };
    this.fetchPokemons();
  }

  public search(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.trim().toLocaleLowerCase());
    });

    this.getPokemons = filter;

    this.hasError = this.getPokemons.length === 0 ? true : false;
  }

  public changePagination(value: string) {
    this.fetchPokemonsService.limitPagination(value);

    this.fetchPokemons();
  }

  private urlSearchParams(url: string): string {
    if (!url) {
      return url;
    }

    return url
      .split('&')[0]
      .replace('https://pokeapi.co/api/v2/pokemon?offset=', '');
  }

  public fetchPokemons(newPage?: string) {
    if (newPage) {
      this.fetchPokemonsService.setNewOffset(newPage);
    }

    this.fetchPokemonsService.apiListAllPokemons.subscribe((res) => {
      this.setPokemons = res.results;
      this.getPokemons = this.setPokemons;

      this.backPage = this.urlSearchParams(res.previous);
      this.nextPage = this.urlSearchParams(res.next);
    });
  }
}
