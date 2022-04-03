const pokedex = document.getElementById("pokedex");
console.log(pokedex);

const fetchPokemon = async () =>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data =  await res.json();
    const pokemon = data.results.map( (result, index) => ({
        ...result, 
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));
    displayPokemon(pokemon);

};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokeman => `
        <li class="card ">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class=""card-title>${pokeman.id}. ${pokeman.name}</h2>
            
        </li>
    `)
    .join("");
    pokedex.innerHTML = pokemonHTMLString;
}


fetchPokemon();