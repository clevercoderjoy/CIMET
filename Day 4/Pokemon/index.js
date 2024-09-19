// const loadMoreBtn = document.querySelector("#loadMore");
// let pokemons = [];
// const filteredPokemons = [];
// let limit = 20;
// let offset = 0;
// let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

// const getPokemonsFromApi = async (url) => {
//   try {
//     const apiResponse = await fetch(url);
//     const apiResponseJson = await apiResponse.json();
//     return apiResponseJson;
//   }
//   catch (e) {
//     console.log(e);
//   }
// }

// const processApiData = async (dataToBeProcessed) => {
//   let temp = dataToBeProcessed.results.map(async (pkmn) => await getPokemonsFromApi(pkmn.url));
//   temp = await Promise.all(temp)
//   pokemons = [...pokemons, ...temp];
//   console.log(pokemons);
// }

// const updateUrl = () => {
//   offset += limit;
//   return apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
// }

// window.addEventListener("load", async () => {
//   const pkmnData = await getPokemonsFromApi(apiUrl);
//   processApiData(pkmnData);
// })

// loadMoreBtn.addEventListener("click", async () => {
//   let temp = await getPokemonsFromApi(updateUrl());
//   processApiData(temp);
// })

const loadMoreBtn = document.querySelector("#loadMore");
let pokemons = [];
let limit = 20;
let offset = 0;

const fetchPokemonList = async (limit, offset) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error(e);
  }
}

const fetchPokemonDetails = async (pokemonList) => {
  try {
    const detailedDataPromises = pokemonList.map(pkmn => fetch(pkmn.url).then(res => res.json()));

    const detailedData = await Promise.all(detailedDataPromises);
    return detailedData;
  } catch (e) {
    console.error(e);
  }
}

const processPokemonData = async (limit, offset) => {
  const pokemonList = await fetchPokemonList(limit, offset);

  const detailedPokemonData = await fetchPokemonDetails(pokemonList);

  pokemons = [...pokemons, ...detailedPokemonData];

  console.log(pokemons);
}

window.addEventListener("load", async () => {
  await processPokemonData(limit, offset);
});

loadMoreBtn.addEventListener("click", async () => {
  offset += limit;
  await processPokemonData(limit, offset);
});
