import React from 'react'
import { Detail, Pokemon, PokemonDetail } from "./interface"
import "../App.css"
import PokemonList from './PokemonList';
import "./pokemon.css";


interface Props {
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

function PokemonCollection(props: Props) {
    const {pokemons, viewDetail, setViewDetail} = props ;
    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpenned) {
            setViewDetail({
                id,
                isOpenned: true,
            });
        }
   
    };

  return (
    <>
        <section className={viewDetail.isOpenned? "collection-container-active" : "collection-container"}>
            {viewDetail.isOpenned? (<div className="overlay"></div>) : null}
            {pokemons.map((pokemon) => {
                return (
                    <div onClick={() => selectPokemon(pokemon.id)}>
                        <PokemonList 
                        viewDetail={viewDetail}
                        setViewDetail={setViewDetail}
                        key={pokemon.id}
                        name={pokemon.name}
                        id={pokemon.id}
                        abilities={pokemon.abilities}
                        image={pokemon.sprites.front_default}
                        />
                        
                    </div>
                )
                })}
        </section>
    </>
  )

}
export default PokemonCollection