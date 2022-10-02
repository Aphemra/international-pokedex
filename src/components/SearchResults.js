function SearchResults({ results, searchFilter }) {
	return (
		<ul>
			{results.results
				? results.results.map((result, index) => (
						<li key={index} className="pokemon-name">
							{result.name}
						</li>
				  ))
				: "Loading..."}
		</ul>
	);
}

export default SearchResults;
