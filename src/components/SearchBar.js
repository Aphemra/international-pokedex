import { useState } from "react";

function SearchBar({ switchTheme, searchFilter, setSearchFilter }) {
	const [filtersVisibility, setFiltersVisibility] = useState(true);

	function handleSearchChange(event) {
		const newFilter = searchFilter;
		newFilter.mainInput = event.target.value.toLowerCase();
		setSearchFilter({ ...newFilter });
	}

	function handleTypeSelectChange(event) {
		const newFilter = searchFilter;
		newFilter.typeChoice = event.target.value.toLowerCase();
		setSearchFilter({ ...newFilter });
	}

	function toggleFiltersVisibility() {
		setFiltersVisibility(!filtersVisibility);
	}

	return (
		<div className="search-bar">
			<div className="search">
				<input onChange={handleSearchChange} type="text" placeholder="Search..."></input>
				<button type="button" onClick={toggleFiltersVisibility}>
					Show Filters
				</button>
				<button type="button" onClick={switchTheme}>
					Switch Theme
				</button>
			</div>
			<div className={filtersVisibility ? "filters" : "filters collapsed"}>
				<div>Filters:</div>
				<form>
					<label htmlFor="types">Type:</label>
					<select onChange={handleTypeSelectChange} id="types" name="types">
						<option value="none">None</option>
						<option value="normal">Normal</option>
						<option value="fighting">Fighting</option>
						<option value="flying">Flying</option>
						<option value="poison">Poison</option>
						<option value="ground">Ground</option>
						<option value="rock">Rock</option>
						<option value="bug">Bug</option>
						<option value="ghost">Ghost</option>
						<option value="steel">Steel</option>
						<option value="fire">Fire</option>
						<option value="water">Water</option>
						<option value="grass">Grass</option>
						<option value="electric">Electric</option>
						<option value="psychic">Psychic</option>
						<option value="ice">Ice</option>
						<option value="dragon">Dragon</option>
						<option value="dark">Dark</option>
						<option value="fairy">Fairy</option>
					</select>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
