import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import useLocalState from "./hooks/useLocalState";
import useFetchData from "./hooks/useFetchData";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");
	const [searchFilter, setSearchFilter] = useState({});

	const pokemonData = useFetchData("https://pokeapi.co/api/v2/pokemon/?limit=20");

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<SearchBar switchTheme={switchTheme} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
			<SearchResults results={pokemonData} searchFilter={searchFilter} />
		</div>
	);
}

export default App;
