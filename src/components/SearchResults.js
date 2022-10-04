function SearchResults({ results, searchFilter }) {
	return (
		<div className="search-results">
			<ul>
				{results.results
					? results.results.map((result, index) => (
							<li key={index} className="pokemon-name">
								{/* <img src="" alt={result.name} /> */}
								<div>{result.name}</div>
							</li>
					  ))
					: "Loading..."}
			</ul>
		</div>
	);
}

export default SearchResults;
