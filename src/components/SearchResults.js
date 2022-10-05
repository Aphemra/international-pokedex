import { useRef, useState } from "react";
import PokemonEntry from "./PokemonEntry";

function SearchResults({ pokemonData, pokemonToLoad, searchFilter }) {
	const [isLoading, setIsLoading] = useState(true);
	const counter = useRef(0);
	function handleImageLoaded() {
		counter.current += 1;
		if (counter.current >= pokemonToLoad / 2) setIsLoading(false);
	}

	console.log(counter.current);

	return (
		<>
			<div style={{ display: isLoading ? "block" : "none" }}>Loading 1154 Pokemon...</div>
			<div style={{ display: isLoading ? "none" : "unset" }} className="search-results">
				<ul>
					{pokemonData
						? pokemonData.map((pokemon, index) => (
								<PokemonEntry key={index} pokemon={pokemon} handleImageLoaded={handleImageLoaded} />
						  ))
						: "Loading..."}
				</ul>
			</div>
		</>
	);
}

export default SearchResults;
