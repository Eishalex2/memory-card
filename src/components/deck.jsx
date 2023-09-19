import Card from './card';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const pokemonIdList = [
  1,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110
]



export default function Deck({ handleClick }) {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemonData() {
    Promise.all(
      pokemonIdList.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
    )
    .then(async promiseResult => {
      const requestData = [];
      for (const pokemonPromise of promiseResult) {
        const data = await pokemonPromise.json();
        requestData.push({
          id: data.id,
          name: data.name,
          imageUrl: data.sprites.other["official-artwork"].front_default,
          clicked: false
        })
      }
      setPokemon([...requestData]);
    });
  }

  useEffect(() => {
    getPokemonData()
  }, []);

  function shuffleCards() {
    setPokemon(pokemon.sort(() => Math.random() - 0.5));
  }

  return (
    <section>
      <div className="deck">
        {pokemon.map(pokemon => {
          return (
            <Card
              imageUrl = {pokemon.imageUrl}
              key = {pokemon.id}
              name = {pokemon.name}
              handleClick={() => {
                handleClick(pokemon.id);
                shuffleCards();
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

Deck.propTypes = {
  handleClick: PropTypes.func
}