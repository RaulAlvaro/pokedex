<template>
  <div class="pokemon-search">
    <v-text-field
      solo
      prepend-inner-icon="mdi-magnify"
      placeholder="Search"
      class="pokemon-search__input"
      v-model="searchPokemon"
    ></v-text-field>
    <div v-if="!pokemonNotFound" class="pokemon-search__list">
      <div
        class="pokemon-search__list-item"
        v-for="(pokemon, key) in pokemonsFiltered"
        :key="key"
        @click="openDetailPokemon(pokemon)"
      >
        <div class="pokemon-search__list-item-name">
          {{ pokemon.name }}
        </div>
        <img
          v-if="pokemon.favourite"
          @click.stop="selectPokemon(pokemon.name)"
          class="pokemon-search__list-item-star"
          src="../../assets/images/favorite.svg"
          alt="favourite"
        />
        <img
          v-else
          @click.stop="selectPokemon(pokemon.name)"
          class="pokemon-search__list-item-star"
          src="../../assets/images/not-favorite.svg"
          alt="favourite"
        />
      </div>
    </div>
    <div v-else class="pokemon-search__not-found">
      <h1 class="pokemon-search__not-found-title">Uh - oh!</h1>
      <p class="pokemon-search__not-found-subtitle">
        You look lost on your journey!
      </p>
      <button
        class="button-pokedex pokemon-search__not-found-button"
        @click="goBackHome"
      >
        Go back home
      </button>
    </div>
    <modal-pokemon />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import ModalPokemon from './ModalPokemon';

export default {
  components: {
    ModalPokemon,
  },
  computed: {
    ...mapGetters([
      'pokemons',
      'pokemon',
      'modalPokemon',
      'isFilterFavorite',
      'loadingPokemon',
    ]),
  },
  data: () => ({
    searchPokemon: '',
    pokemonNotFound: false,
    error: false,
    loading: false,
    pokemonsFiltered: [],
    timeout: null,
  }),
  created() {
    this.filterPokemons();
  },
  watch: {
    searchPokemon() {
      clearTimeout(this.timeout);
      let self = this;
      this.timeout = setTimeout(function() {
        self.filterPokemons();
      }, 500);
    },
    pokemons() {
      this.filterPokemons();
    },
    isFilterFavorite() {
      this.filterPokemons();
    },
  },
  methods: {
    ...mapActions(['getPokemon', 'addOrRemoveFavorite']),
    ...mapMutations(['setModalPokemon', 'setPokemonSelected']),
    async selectPokemon(name) {
      await this.addOrRemoveFavorite(name);
    },
    async openDetailPokemon(pokemon) {
      if (!this.loadingPokemon) {
        const namePokemon = pokemon.name.toLowerCase();
        await this.setPokemonSelected(pokemon);
        await this.getPokemon(namePokemon);
        await this.setModalPokemon(true);
      }
    },
    filterPokemons() {
      this.pokemonsFiltered = this.pokemons;
      if (this.searchPokemon === '') {
        this.pokemonsFiltered = this.filterWithoutWordSearch(
          this.isFilterFavorite
        );
      } else {
        this.pokemonsFiltered = this.filterWithWordSearch(
          this.isFilterFavorite
        );
      }
      this.validateShowListPokemons(this.pokemonsFiltered);
      return this.pokemonsFiltered;
    },
    filterWithoutWordSearch(isFilterFavorite) {
      if (isFilterFavorite) {
        return this.pokemons.filter((c) => c.favourite === true);
      } else {
        return this.pokemons;
      }
    },
    filterWithWordSearch(isFilterFavorite) {
      if (isFilterFavorite) {
        return this.pokemons
          .filter((c) => c.favourite === true)
          .filter((c) => c.name === this.searchPokemon);
      } else {
        return this.pokemons.filter((c) => c.name === this.searchPokemon);
      }
    },
    validateShowListPokemons(pokemonsFiltered) {
      pokemonsFiltered.length === 0
        ? (this.pokemonNotFound = true)
        : (this.pokemonNotFound = false);
    },
    goBackHome() {
      this.searchPokemon = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/settings/colors';
@import '~@/assets/scss/settings/media';
@import '~@/assets/scss/settings/button';

.pokemon-search {
  background-color: $color-gray1;
  margin-bottom: 40px;
  padding: 2em 0em;
  text-align: center;
  min-height: calc(100vh - 80px);

  .pokemon-search__input {
    margin-left: auto;
    margin-right: auto;
    max-width: 570px;

    @include mobile-only {
      max-width: 315px;
    }
  }

  &__list {
    &-item {
      align-items: center;
      background-color: white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
      margin-left: auto;
      margin-right: auto;
      max-width: 570px;
      cursor: pointer;
      @include mobile-only {
        max-width: 315px;
      }

      &-name {
        margin-left: 20px;
      }

      &-star {
        height: 44px;
        margin: 8px 10px;
        width: 44px;
        cursor: pointer;
      }
    }
  }

  &__not-found {
    &-title {
      font-size: 36px;
      margin-top: 1em;
    }

    &-subtitle {
      font-size: 20px;
      margin-bottom: 1em;
    }

    &-button {
      width: 155px;
      height: 44px;
      margin-bottom: 1em;
    }
  }
}
</style>
