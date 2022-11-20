function pokemonConvetTypes(pokemoTypes) {
  return pokemoTypes.map(
    (typeSlote) => `<li class="typer">${typeSlote.type.name}</li>`
  );
}

function pokemonConvetHtml(pokemon) {
  return `
<li class="pokemon">
  <span class="number">#${pokemon.order}</span>
  <span class="name">${pokemon.name}</span>
        <div class="detail">
           <ol class="typers">                  
           ${pokemonConvetTypes(pokemon.types).join(``)}
           </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"alt="${pokemon.name}" srcset="" />
    </div>
</li>`
}

const pokemonList = document.getElementById(`pokemonList`);

// api
PokeAPI.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(pokemonConvetHtml).join("");
});
