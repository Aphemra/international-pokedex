import React from "react";

function PokemonEntry({ pokemon }) {
	return (
		<li className="pokemon-info">
			<div className="pokemon-info-left">
				<img className="pokemon-thumbnail" src={pokemon.images.main} alt={pokemon.name} />
				<div className="pokemon-types">
					<div
						className={
							pokemon.details.type_two
								? `type ${pokemon.details.type_one}`
								: `type ${pokemon.details.type_one} large`
						}
					>
						{pokemon.details.type_one}
					</div>
					<div className={pokemon.details.type_two ? `type ${pokemon.details.type_two}` : `type hide`}>
						{pokemon.details.type_two ? pokemon.details.type_two : ""}
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
