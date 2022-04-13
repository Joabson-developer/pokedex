import { TestBed } from '@angular/core/testing';

import { FetchPokemonsService } from './fetch-pokemons.service';

describe('FetchPokemonsService', () => {
  let service: FetchPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
