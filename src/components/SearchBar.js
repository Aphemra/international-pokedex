function SearchBar({ switchTheme, searchFilter, setSearchFilter }) {
	function handleChange(event) {
		const newFilter = searchFilter;
		newFilter.mainInput = event.target.value.toLowerCase();
		setSearchFilter({ ...newFilter });
	}

	return (
		<div className="search-bar">
			<input onChange={handleChange} type="text" placeholder="Search..."></input>
			<button type="button" onClick={switchTheme}>
				Switch Theme
			</button>
		</div>
	);
}

export default SearchBar;
