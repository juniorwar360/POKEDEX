const PokeAPI = {}

PokeAPI.getPokemonsDetail=(pokemon)=>{
 return  fetch(pokemon.url) .then((response)=> response.json())
}
 
PokeAPI.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${offset}`;

  return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => pokemons.map(PokeAPI.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) =>pokemonDetails)
    
};
 