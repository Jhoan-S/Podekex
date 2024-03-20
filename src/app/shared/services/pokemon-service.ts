import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EEndpoints } from '@enums/endpoints.enum';
import { ListedPokemon } from '@models/pokemon-list.model';
import { PokemonResponse } from '@models/pokemon-response';
import { JSAdapter } from 'src/app/core/decorators/adapter.decorator';
import { PokemonAdapter } from 'src/app/feature/pokedex/repositories/adapters/pokemon.adapter';
import { Pokemon } from 'src/app/feature/pokedex/domains/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private request: HttpClient) { }

  getPokemonList(): Observable<ListedPokemon> {
    return this.request.get<ListedPokemon>(EEndpoints.POKEMON_LIST);
  }

  getPokemonByType(typeID: number): Observable<any[]> {
    return this.request.get<any[]>(`${EEndpoints.POKEMON_BY_TYPE}/${typeID}`);
  }

  @JSAdapter({ responseModel: PokemonAdapter })
  getPokemon(url: string): Observable<Pokemon> {
    return this.request.get<Pokemon>(url);
  }

}