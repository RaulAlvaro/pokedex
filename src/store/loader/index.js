const state = {
  loadingAllPokemons: false,
  loadingPokemon: false,
};

const mutations = {
  setLoadingAllPokemons: (state, payload) => {
    state.loadingAllPokemons = payload;
  },

  setLoadingPokemon: (state, payload) => {
    state.loadingPokemon = payload;
  },
};

const getters = {
  loadingAllPokemons: (state) => state.loadingAllPokemons,
  loadingPokemon: (state) => state.loadingPokemon,
};

export default {
  state,
  mutations,
  getters,
};
