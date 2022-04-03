const pokedex = document.getElementById("pokedex");


const fetchPokemon = async () =>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data =  await res.json();
    const pokemon = data.results.map( (result, index) => ({
        ... result, 
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }));
    console.log(data.results);
    displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map(pokeman => `
        <li class="card" onclick="selectPokemon(${pokeman.id})">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class=""card-title>${pokeman.id}. ${pokeman.name}</h2>
        </li>`
        )
    .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (id) =>{
    console.log(id);
};



fetchPokemon();