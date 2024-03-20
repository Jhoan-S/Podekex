export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: PokeStat[];
  weight: number;
  height: number;
  sprite: string;
}

export interface PokeStat {
  name: string;
  baseStat: number;
}