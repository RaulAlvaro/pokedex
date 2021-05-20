import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import pokemon from './pokemon';
import loader from './loader';
import util from './util';

export default new Vuex.Store({
  modules: {
    pokemon,
    loader,
    util,
  },
});
