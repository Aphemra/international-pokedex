import { useEffect, useState } from "react";

function useGetPokemon(pokemonToQuery) {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			await setPokemonList([]);
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonToQuery}`);
			const results = await response.json();
			const pokemons = results.results;

			for await (const pokemon of pokemons) {
				const response = await fetch(pokemon.url);
				const results = await response.json();
				await setPokemonList((prevState) => [...prevState, results]);
			}
		};
		fetchPokemon();
	}, [pokemonToQuery]);

	return pokemonList;
}

export default useGetPokemon;
