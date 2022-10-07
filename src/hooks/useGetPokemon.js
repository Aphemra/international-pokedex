import { useEffect, useState } from "react";
import pokeball from "../images/pokeball.png";

function useGetPokemon(pokemonToQuery, hasLoaded) {
	const [pokemonList, setPokemonList] = useState([]);

	function getOriginalGeneration(nationalDexId) {
		if (nationalDexId <= 151) return "1";
		if (nationalDexId <= 251) return "2";
		if (nationalDexId <= 386) return "3";
		if (nationalDexId <= 493) return "4";
		if (nationalDexId <= 649) return "5";
		if (nationalDexId <= 721) return "6";
		if (nationalDexId <= 809) return "7";
		if (nationalDexId <= 905) return "8";
	}

	function mutatePokemonData(data) {
		data.original_generation = getOriginalGeneration(data.id);
		data.details = {
			base_exp: data.base_experience,
			height: data.height,
			weight: data.weight,
			stats: {
				health: data.stats[0].base_stat,
				attack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				special_attack: data.stats[3].base_stat,
				special_defense: data.stats[4].base_stat,
				speed: data.stats[5].base_stat,
			},
			type_one: data.types[0].type.name,
			type_two: data.types[1]?.type.name,
		};
		data.images = {
			main: data.sprites.other["official-artwork"].front_default || pokeball,
			front: data.sprites.front_default,
			back: data.sprites.back_default,
			shiny_front: data.sprites.front_shiny,
			shiny_back: data.sprites.back_shiny,
		};
		delete data.abilities;
		delete data.base_experience;
		delete data.forms;
		delete data.game_indices;
		delete data.height;
		delete data.held_items;
		delete data.is_default;
		delete data.order;
		delete data.past_types;
		delete data.species;
		delete data.sprites;
		delete data.stats;
		delete data.types;
		delete data.weight;

		delete data.moves;
	}

	useEffect(() => {
		if (hasLoaded) return;
		const fetchPokemon = async () => {
			setPokemonList([]);
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonToQuery}`);
			const results = await response.json();
			const pokemons = results.results;

			for await (const pokemon of pokemons) {
				const response = await fetch(pokemon.url);
				const results = await response.json();
				mutatePokemonData(results);
				//results.id === 1 ? console.log(results) : console.log();
				setPokemonList((prevState) => [...prevState, results]);
			}
		};
		fetchPokemon();
	}, [pokemonToQuery]);

	return pokemonList;
}

export default useGetPokemon;
