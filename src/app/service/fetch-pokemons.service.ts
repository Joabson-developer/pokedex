import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchPokemonsService {
  public offset: string = '0';
  public limit: string = '10';
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http
      .get(`${this.url}?offset=${this.offset}&limit=${this.limit}`)
      .pipe(
        tap((res: any) =>
          res.results.map((resPokemon: any) => {
            this.apiGetPokemons(resPokemon.url).subscribe(
              (res) => (resPokemon.status = res)
            );
          })
        )
      );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  public setNewOffset(newOffset: string) {
    this.offset = newOffset;
  }

  public limitPagination(limit: string) {
    this.limit = limit;
  }
}
