export interface ListedPokemon {
  next: string;
  count: number;
  results: PokemonResults[];
  previous?: string;
}

export interface PokemonResults {
  url: string;
  name: string;
}