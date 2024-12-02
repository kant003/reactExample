/*
*/

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


interface Pokemon {
  name: string;
  url: string;
}

export default function Ejem21() {
  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit");

    useEffect(() => {
      async function getPokemon(){
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit='+limit
        const request = await fetch(url)
        console.log(url)  
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
