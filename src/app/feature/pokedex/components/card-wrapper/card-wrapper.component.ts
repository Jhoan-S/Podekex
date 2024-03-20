import { Component, Input, OnInit, inject } from '@angular/core';
import { PokemonResults } from '@models/pokemon-list.model';
import { PokemonService } from '@services/pokemon-service';
import { Pokemon } from '../../domains/pokemon';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss'
})
export class CardWrapperComponent implements OnInit {

  @Input() pokemonData: PokemonResults = { name: '', url: '' };

  private pokemonService = inject(PokemonService);

  public pokemon: Pokemon = {} as Pokemon;

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonData.url).subscribe({
      next: pokemonDetail => this.pokemon = pokemonDetail
    });
  }
}
