import { useRef, useState } from "react";

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
								<li key={index} className="pokemon-info">
									<img
										className="pokemon-thumbnail"
										src={pokemon.sprites.other["official-artwork"].front_default}
										alt={pokemon.name}
										onLoad={handleImageLoaded}
									/>
									<div className="pokemon-name">{pokemon.name}</div>
								</li>
						  ))
						: "Loading..."}
				</ul>
			</div>
		</>
	);
}

export default SearchResults;
