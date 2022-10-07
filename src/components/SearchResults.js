import PokemonEntry from "./PokemonEntry";

function SearchResults({ loadedPokemonData, pokemonToLoad, pokemonData, hasLoaded, searchFilter }) {
	return (
		<>
			<div className="search-results">
				<ul>
					{hasLoaded ? (
						pokemonData.map((pokemon, index) => <PokemonEntry key={index} pokemon={pokemon} />)
					) : (
						<div className="loading-module">
							<div>{`Loading ${loadedPokemonData.length}/${pokemonToLoad} Pokemon`}</div>
							<div
								className="loading-bar background"
								style={{ width: `${(loadedPokemonData.length / pokemonToLoad) * 100}%` }}
							></div>
							<div className="loading-bar fill"></div>
						</div>
					)}
				</ul>
			</div>
		</>
	);
}

export default SearchResults;
