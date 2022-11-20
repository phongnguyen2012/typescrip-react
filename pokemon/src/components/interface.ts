export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }

  export interface Detail {
    id: number;
    isOpenned: boolean;
  }
  
  export interface PokemonDetail extends Pokemon {
    abilities?: {
      ability: string;
      name: string;
    }[];
  }