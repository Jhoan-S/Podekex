import { Component, Input } from '@angular/core';
import { Pokemon } from '../../domains/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;
}
