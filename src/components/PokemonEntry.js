import React from "react";

function PokemonEntry({ pokemon, handleImageLoaded }) {
	return (
		<li className="pokemon-info">
			<img
				className="pokemon-thumbnail"
				src={pokemon.sprites.other["official-artwork"].front_default}
				alt={pokemon.name}
				onLoad={handleImageLoaded}
			/>
			<div className="pokemon-name">{pokemon.name}</div>
		</li>
	);
}

export default PokemonEntry;
