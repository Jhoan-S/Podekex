import { PokemonResponse, Stat, Type } from '@models/pokemon-response';
import { PokeStat, Pokemon } from '../../domains/pokemon';

export class PokemonAdapter implements Pokemon {
  id: number = 0;
  name: string = '';
  types: string[] = [];
  stats: PokeStat[] = [];
  weight: number = 0;
  height: number = 0;
  sprite: string = '';

  constructor(pokemonResponseDto: PokemonResponse) {
    this.id = pokemonResponseDto.id;
    this.name = pokemonResponseDto.name;
    this.types = this.getTypes(pokemonResponseDto.types)
    this.stats = this.getStats(pokemonResponseDto.stats);
    this.weight = pokemonResponseDto.weight;
    this.height = pokemonResponseDto.height;
    this.sprite = pokemonResponseDto.sprites.other.dream_world.front_default;
  }

  private getTypes(types: Type[]): string[] {
    return types.map(type => ( type.type.name ));
  }

  private getStats(stats: Stat[]): PokeStat[] {
    return stats.map(stat => ({ name: stat.stat.name, baseStat: stat.base_stat }));
  }
}