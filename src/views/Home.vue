<template>
  <div>
    <div v-if="loadingAllPokemons">
      <Loader />
    </div>
    <div v-else>
      <PokemonSearch />
      <Footer class="home__footer" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '../components/general/Loader';
import PokemonSearch from '../components/pokemon/PokemonSearch';
import Footer from '../components/general/Footer';

export default {
  name: 'Home',
  components: {
    PokemonSearch,
    Footer,
    Loader,
  },
  async created() {
    await this.getPokemons();
  },
  computed: {
    ...mapGetters(['loadingAllPokemons']),
  },
  methods: {
    ...mapActions(['getPokemons']),
  },
};
</script>

<style>
.home__footer {
  position: fixed;
  bottom: 0;
}
</style>
