import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListedPokemon } from '@models/pokemon-list.model';
import { PokemonService } from '@services/pokemon-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  pokemonList$: Observable<ListedPokemon> = new Observable();

  constructor(private pokemonService: PokemonService) {
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

}
