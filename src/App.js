import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import useLocalState from "./hooks/useLocalState";
import useGetPokemon from "./hooks/useGetPokemon";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");
	const [searchFilter, setSearchFilter] = useState({});

	const pokemonToLoad = 1154; //1154 total pokemon available
	const pokemonData = useGetPokemon(pokemonToLoad);

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<SearchBar switchTheme={switchTheme} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
			<SearchResults pokemonData={pokemonData} pokemonToLoad={pokemonToLoad} searchFilter={searchFilter} />
		</div>
	);
}

export default App;
