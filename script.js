const pokemonImageUrl = "https://pokeapi.co/api/v2/pokemon/"

const pokemonEntryTemplate = document.querySelector("[data-pokemon-entry-template]")
const pokemonSearchResults = document.querySelector("[data-search-results]")
const userInput = document.querySelector("[data-user-input]")

let pokemans = []

userInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    pokemans.forEach(pokemon => {
        const isVisible = pokemon.name.includes(value) || pokemon.index.includes(value)
        //     pokemon.type1.includes(value) || pokemon.type2.includes(value)
        pokemon.element.classList.toggle("hide", !isVisible)
    })
})

pokemonSearchResults.classList.add("hide")
setTimeout( () => {
    pokemonSearchResults.classList.remove("hide")
}, 1500)

fetch("https://pokeapi.co/api/v2/pokemon?limit=898") //905
.then(res => res.json())
.then(data => {
    let count = 1
    pokemans = data.results.map(pokemon => {
        const entry = pokemonEntryTemplate.content.cloneNode(true).children[0]
        const image = entry.querySelector("[data-main-image]")
        const name = entry.querySelector("[data-pokemon-name]")
        const type1 = entry.querySelector("[data-pokemon-type1]")
        const type2 = entry.querySelector("[data-pokemon-type2]")
        const index = entry.querySelector("[data-pokemon-index]")

        let primaryType
        let secondaryType

        // Setting Name
        name.textContent = capitalize(pokemon.name)

        // Setting Index Number
        index.textContent = "#" + count.toString().padStart(3, "0")
        count = count + 1

        // Setting Image and Types
        const entryUrl = pokemon.url
        fetch(entryUrl).then(res => res.json()).then(data => {

            // Setting Image
            const imageUrl = data.sprites.other["official-artwork"].front_default
            image.src = imageUrl
            image.alt = pokemon.name + " sprite"

            //Setting Types
            if (data.types.length > 1) {
                type1.textContent = capitalize(data.types[0].type.name)
                type1.classList.add(data.types[0].type.name)
                primaryType = data.types[0].type.name
                type2.textContent = capitalize(data.types[1].type.name)
                type2.classList.add(data.types[1].type.name)
                secondaryType = data.types[0].type.name
            }
            else {
                type1.textContent = capitalize(data.types[0].type.name)
                type1.classList.add(data.types[0].type.name)
                type1.classList.add("wide")
                type2.classList.add("hide")
                primaryType = data.types[0].type.name
            }
        })

        // Add entry to search results and return data
        pokemonSearchResults.append(entry)
        return {name: pokemon.name, type1: primaryType, type2: secondaryType, index: index.textContent, element: entry}
    });
})

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}