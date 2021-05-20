const state = {
  modalPokemon: false,
  isFilterFavorite: false,
};

const mutations = {
  setModalPokemon: (state, payload) => {
    state.modalPokemon = payload;
  },

  setIsFilterFavorite: (state, payload) => {
    state.isFilterFavorite = payload;
  },
};

const getters = {
  modalPokemon: (state) => state.modalPokemon,
  isFilterFavorite: (state) => state.isFilterFavorite,
};

export default {
  state,
  mutations,
  getters,
};
