import { getPokemons, getPokemon } from '../../api/pokemon';

const state = {
  pokemons: [],
  pokemon: {},
  pokemonSelected: {},
};

const mutations = {
  setPokemons: (state, payload) => {
    state.pokemons = payload;
  },
  setPokemon: (state, payload) => {
    state.pokemon = payload;
  },
  setPokemonSelected: (state, payload) => {
    state.pokemonSelected = payload;
  },
};

const actions = {
  getPokemons: async ({ commit }) => {
    commit('setLoadingAllPokemons', true);
    setTimeout(async () => {
      const pokemonFormatted = await getPokemons();
      commit('setPokemons', pokemonFormatted);
      commit('setLoadingAllPokemons', false);
    }, 500);
  },
  getPokemon: async ({ commit }, name) => {
    commit('setLoadingPokemon', true);
    const data = await getPokemon(name);
    commit('setPokemon', data);
    commit('setLoadingPokemon', false);
  },
  addOrRemoveFavorite: async ({ state, commit }, name) => {
    const pokemonsUpdated = state.pokemons.map((c) => {
      if (c.name === name) {
        return {
          name: c.name,
          url: c.url,
          favourite: !c.favourite,
        };
      } else return c;
    });
    commit('setPokemons', pokemonsUpdated);
  },
};

const getters = {
  pokemons: (state) => state.pokemons,
  pokemon: (state) => state.pokemon,
  pokemonSelected: (state) => state.pokemonSelected,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
