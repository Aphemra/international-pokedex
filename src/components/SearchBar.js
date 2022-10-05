function SearchBar({ switchTheme, searchFilter, setSearchFilter }) {
	return (
		<div className="search-bar">
			<input type="text" placeholder="Search..."></input>
			<button type="button" onClick={switchTheme}>
				Switch Theme
			</button>
		</div>
	);
}

export default SearchBar;
