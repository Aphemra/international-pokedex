import { useState } from "react";

function SearchBar({ switchTheme, searchFilter, setSearchFilter }) {
	const [filtersVisibility, setFiltersVisibility] = useState(false);

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

	function handleGenerationSelectChange(event) {
		const newFilter = searchFilter;
		newFilter.generationChoice = event.target.value.toLowerCase();
		setSearchFilter({ ...newFilter });
	}

	function toggleFiltersVisibility() {
		setFiltersVisibility(!filtersVisibility);
	}

	return (
		<div id="#top" className="search-bar">
			<div className="search">
				<input onChange={handleSearchChange} type="text" placeholder="Search..."></input>
				<div className="button-container">
					<button type="button" onClick={toggleFiltersVisibility}>
						Show Filters
					</button>
					<button type="button" onClick={switchTheme}>
						Switch Theme
					</button>
				</div>
			</div>
			<div className={filtersVisibility ? "filters" : "filters collapsed"}>
				<div>Filters:</div>
				<form>
					<label htmlFor="types">Type:</label>
					<select onChange={handleTypeSelectChange} id="types" name="types">
						<option value="">None</option>
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
				<form>
					<label htmlFor="generations">Generation:</label>
					<select onChange={handleGenerationSelectChange} id="generations" name="generations">
						<option value="">None</option>
						<option value="1">I</option>
						<option value="2">II</option>
						<option value="3">III</option>
						<option value="4">IV</option>
						<option value="5">V</option>
						<option value="6">VI</option>
						<option value="7">VII</option>
						<option value="8">VIII</option>
					</select>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
