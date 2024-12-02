/*
*/

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";


interface Pokemon {
  name: string;
  url: string;
}

export default function Ejem21() {
  const {nombre} = useParams()

   const [pokemon, setPokemon] = useState();
    
    useEffect(() => {
      async function getPokemon(){
        const url = 'https://pokeapi.co/api/v2/pokemon/'+nombre
        const request = await fetch(url)
        const data = await request.json()
        setPokemon(data)
      }
      getPokemon()
    },[])
     
    return <div>
        <h1>Poken {nombre}</h1>
        <div> {pokemon?.name} </div>
        <div> {pokemon?.height} </div>
        <div> {pokemon?.weight} </div>
        <img src={pokemon?.sprites?.front_default} alt={nombre}/>
    </div>;
}
