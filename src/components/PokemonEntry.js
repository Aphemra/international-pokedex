import React from "react";

function PokemonEntry({ pokemon, handleImageLoaded }) {
	return (
		<li className="pokemon-info">
			<div className="pokemon-info-left">
				<img
					className="pokemon-thumbnail"
					src={pokemon.sprites.other["official-artwork"].front_default}
					alt={pokemon.name}
					onLoad={handleImageLoaded}
				/>
				<div className="pokemon-types">
					<div
						className={
							pokemon.types.length === 2
								? `type ${pokemon.types[0].type.name}`
								: `type ${pokemon.types[0].type.name} large`
						}
					>
						{pokemon.types[0].type.name}
					</div>
					<div className={pokemon.types.length === 2 ? `type ${pokemon.types[1].type.name}` : `type hide`}>
						{pokemon.types.length === 2 ? pokemon.types[1].type.name : ""}
					</div>
				</div>
			</div>
			<div className="pokemon-info-right">
				<div className="pokemon-name">{pokemon.name}</div>
				<div>{"#" + String(pokemon.id).padStart(3, "0")}</div>
			</div>
		</li>
	);
}

export default PokemonEntry;
