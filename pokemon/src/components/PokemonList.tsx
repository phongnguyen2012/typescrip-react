import React ,{useState, useEffect} from 'react'
import "./pokemon.css";
import {Detail} from "./interface";

interface Props {
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities: {
    ability: string;
    name: string;

  }[] | undefined;
    name: string;
    id: number;
    image: string;
}


function PokemonList(props: Props) {
  const { name, id, image, abilities, viewDetail, setViewDetail } = props;
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
      setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);
  const closeDetail = () => {
      setViewDetail({
          id: 0,
          isOpenned: false,
      });
  };
  return (
      <div className=''>
          {isSelected ? (<section className='pokemon-list-detailed'>
              <div className='detail-container'>
                  <p className='detail-close' onClick={closeDetail}>X</p>
                  <div className='detail-info'>
                      <img src={image} alt='pokemon' className='detail-img' />
                      <p className="detail-name">{name}</p>
                  </div>
                  <div className="detail-skill">
                      <p className="detail-ability">Abilities : </p>
                      {abilities?.map((ab: any) => {
                          return (
                              <div className="">{ab.ability.name}</div>
                          )
                      })}
                  </div>
              </div>
          </section>) : (<section className="pokemon-list-container">
              <p className='pokemon-name'>{name}</p>
              <img src={image} alt="pokemon" />

          </section>)}

      </div>
  )
}

export default PokemonList