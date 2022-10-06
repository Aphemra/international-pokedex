import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import useLocalState from "./hooks/useLocalState";
import useGetPokemon from "./hooks/useGetPokemon";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	const [searchFilter, setSearchFilter] = useState({ mainInput: "", typeChoice: "none" });

	const pokemonToLoad = 151; //1154 total pokemon available
	const loadedPokemonData = useGetPokemon(pokemonToLoad);
	const [pokemonData, setPokemonData] = useState(loadedPokemonData);

	useEffect(() => {
		setPokemonData(loadedPokemonData);
	}, [loadedPokemonData]);

	useEffect(() => {
		let filteredPokemonData = loadedPokemonData;
		if (searchFilter.typeChoice !== "none") {
			filteredPokemonData = loadedPokemonData.filter((pokemon) => {
				return (
					pokemon?.types[0]?.type.name === searchFilter.typeChoice ||
					pokemon?.types[1]?.type.name === searchFilter.typeChoice
				);
			});
		}

		filteredPokemonData = filteredPokemonData.filter((pokemon) => pokemon.name.includes(searchFilter.mainInput));
		setPokemonData([...filteredPokemonData]);
	}, [loadedPokemonData, searchFilter]);

	useEffect(() => console.log(searchFilter), [searchFilter]);

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<SearchBar switchTheme={switchTheme} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
			<SearchResults
				pokemonData={pokemonData}
				setPokemonData={setPokemonData}
				pokemonToLoad={pokemonToLoad}
				searchFilter={searchFilter}
			/>
		</div>
	);
}

export default App;
