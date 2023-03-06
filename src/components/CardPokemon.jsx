import React from "react";
import { useState, useEffect } from "react";

const Cardpokemon = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          type: poke.types
        };
      });

      setPokemones(await Promise.all(newPokemones));
    };

    getPokemones();
  }, []);

  return (
    <div className="grid grid-flow-col">
         <button>
            <span>Anterior</span>
          <img
          className=" h-24"
            src="https://doggishpetboutique.com/wp-content/uploads/2020/07/Placas-geek-19.png"
            alt=""
          />
        </button>
      <div className=" grid grid-flow-row sm: grid-cols-3 gap-4">
        {pokemones.map((pokemon) => {
          return (
            <div className="hover:scale-125 grid justify-items-center max-w-sm rounded overflow-hidden shadow-lg">
              <img className=" h-20" src={pokemon.img} alt={pokemon.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pokemon.name}</div>
              </div>
              {pokemon.type.map ((type_n)=>{
                console.log(type_n)
                return  <div className=" flex-auto px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {type_n.type.name}
                </span>
              </div>
              })}
             
            </div>
          );
        })}
      </div>
      <button>
            <span>Siguiente</span>
          <img
          className=" h-24"
            src="https://doggishpetboutique.com/wp-content/uploads/2020/07/Placas-geek-19.png"
            alt=""
          />
        </button>
    </div>
  );
};

export default Cardpokemon;
