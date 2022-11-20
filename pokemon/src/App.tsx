import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./components/pokemon.css";


import './App.css';
import PokemonCollection from './components/PokemonCollection';
interface Pokemons {
  name: string;
  url: string;
}
interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
 interface Detail {
  id: number;
  isOpenned: boolean;
}
function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpenned: false,
  });
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });

    };
    getPokemons();
  }, []);
  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      setPokemons((p) => [...p, poke.data]);
      
      setLoading(false);
    });
  };
  return (
    <div className="">
      <header className='pokemon-header'>Pokemon
      </header>
      <PokemonCollection pokemons={pokemons} viewDetail = {viewDetail} setViewDetail = {setViewDetail} />
      <div className='btn'>
        <button onClick={nextPage}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
}

export default App;
