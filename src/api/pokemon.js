export const getPokemons = async () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then((data) => {
      return data.results.map((c) => {
        return {
          name: c.name.charAt(0).toUpperCase() + c.name.slice(1),
          url: c.url,
          favourite: false,
        };
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getPokemon = async (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
