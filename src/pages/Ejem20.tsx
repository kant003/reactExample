/*
*/

import { useEffect, useState } from "react";


interface Pokemon {
  name: string;
  url: string;
}

export default function Ejem20() {
  const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
      async function getPokemon(){
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit='+4
        const request = await fetch(url)
        const data = await request.json()
        setPokemons(data.results)
      }
      getPokemon()
    },[])
    
    return <div>
        <h1>Lista de pokemons</h1>
       { pokemons.map( (pokemon:Pokemon) => <div key={pokemon.name}> {pokemon.name} </div>) }
    </div>;
}
