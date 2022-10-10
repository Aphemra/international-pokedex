import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import useLocalState from "./hooks/useLocalState";
import useGetPokemon from "./hooks/useGetPokemon";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalState("theme", defaultDark ? "dark" : "light");

	const [searchFilter, setSearchFilter] = useState({ mainInput: "", typeChoice: "", generationChoice: "" });

	const pokemonToLoad = 905; // 905 total as of gen 8.

	const [displayedPokemonData, setDisplayedPokemonData] = useState([]);
	const [storedPokemonData, setStoredPokemonData] = useLocalState("stored_pokemon_data", []);
	const [isLoaded, setIsLoaded] = useState(storedPokemonData.length === pokemonToLoad);

	const loadedPokemonData = useGetPokemon(pokemonToLoad, isLoaded);

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (storedPokemonData.length === pokemonToLoad) {
			setIsLoaded(true);
		}
	}, [storedPokemonData]);

	useEffect(() => {
		if (loadedPokemonData.length === pokemonToLoad) {
			setIsLoaded(true);
			setStoredPokemonData(loadedPokemonData);
		}
	}, [loadedPokemonData]);

	useEffect(() => {
		if (isLoaded === false) return;

		let filteredPokemonData = storedPokemonData.filter((pokemon) => pokemon.name.includes(searchFilter.mainInput));

		filteredPokemonData = filteredPokemonData.filter((pokemon) => {
			return (
				!searchFilter.typeChoice ||
				pokemon.details.type_one === searchFilter.typeChoice ||
				pokemon?.details.type_two === searchFilter.typeChoice
			);
		});

		filteredPokemonData = filteredPokemonData.filter((pokemon) => {
			return !searchFilter.generationChoice || pokemon?.original_generation === searchFilter.generationChoice;
		});
		setDisplayedPokemonData([...filteredPokemonData]);
	}, [storedPokemonData, searchFilter]);

	useEffect(() => console.log(searchFilter), [searchFilter]);

	function switchTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}

	return (
		<div className="app" data-theme={theme}>
			<SearchBar switchTheme={switchTheme} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
			<SearchResults
				pokemonData={displayedPokemonData}
				loadedPokemonData={loadedPokemonData}
				pokemonToLoad={pokemonToLoad}
				hasLoaded={isLoaded}
				searchFilter={searchFilter}
			/>
			<div className={scrollPosition >= 500 ? `jump-to-top` : `jump-to-top hide`}>
				<a href="#top">
					<div>
						<div className="arrow"></div>
						<div className="text">Go to Top</div>
					</div>
				</a>
			</div>
		</div>
	);
}

export default App;
