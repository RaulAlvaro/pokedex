<template>
  <v-dialog
    v-model="modalPokemon"
    width="570"
    min-height="508"
    class="modal-pokemon__dialog"
    @input="close"
    @click:outside="close"
  >
    <v-card class="modal-pokemon">
      <div class="modal-pokemon__header">
        <button class="modal-pokemon__header-close" @click="close">
          <img src="../../assets/images/close-button.svg" alt="" />
        </button>
        <img
          v-if="pokemon.sprites"
          class="modal-pokemon__header-image"
          :src="pokemon.sprites.front_default"
        />
        <img
          class="modal-pokemon__header-background"
          src="../../assets/images/background-detail.png"
        />
      </div>
      <div class="modal-pokemon__body">
        <div
          class="modal-pokemon__body-title"
          v-for="(item, key) in typesOfPokemonFormatted()"
          :key="key"
        >
          {{ item.key }}
          <span class="modal-pokemon__body-description">{{ item.value }}</span>
          <hr class="modal-pokemon__body-separator" />
        </div>
      </div>
      <div class="modal-pokemon__footer">
        <button
          class="button-pokedex modal-pokemon__footer-button"
          @click="shareToMyFriends()"
        >
          Share to my friends
        </button>
        <img
          v-if="pokemonSelected.favourite"
          class="modal-pokemon__footer-icon"
          src="../../assets/images/favorite.svg"
          alt="favourite"
        />
        <img
          v-else
          class="modal-pokemon__footer-icon"
          src="../../assets/images/not-favorite.svg"
          alt="favourite"
        />
      </div>
      <v-snackbar v-model="snackbar">
        The attributes of the pokemon were copied to your clipboard
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['modalPokemon', 'pokemon', 'pokemonSelected']),
  },
  data: () => ({
    textToClipboard: '',
    snackbar: false,
  }),
  methods: {
    ...mapMutations(['setModalPokemon']),
    typesOfPokemonFormatted() {
      if (this.pokemon.types) {
        const nameFormatted =
          this.pokemon.name.charAt(0).toUpperCase() +
          this.pokemon.name.slice(1);
        let typesFormated = this.pokemon.types.map(
          (c) => c.type.name.charAt(0).toUpperCase() + c.type.name.slice(1)
        );
        typesFormated = typesFormated.join(', ');
        this.textToClipboard = `${nameFormatted}, ${this.pokemon.weight}, ${this.pokemon.height}, ${typesFormated}`;
        return [
          { key: 'Name', value: nameFormatted },
          { key: 'Weight', value: this.pokemon.weight },
          { key: 'Height', value: this.pokemon.height },
          { key: 'Types', value: typesFormated },
        ];
      }
      return [];
    },
    async close() {
      await this.setModalPokemon(false);
    },
    shareToMyFriends() {
      const container = document.querySelector('.v-dialog');
      this.$copyText(this.textToClipboard, container).then(() => {
        this.snackbar = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/settings/colors';
@import '~@/assets/scss/settings/media';
@import '~@/assets/scss/settings/button';

.modal-pokemon__dialog {
  display: block !important;

  .v-dialog__content--active {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.modal-pokemon {
  padding: 0;

  &__header {
    left: 0;
    min-height: 180px;
    position: relative;

    top: 0;

    &-close {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 1;
    }

    &-image {
      left: 40%;
      position: absolute;
      top: 25%;
      width: 120px;
      z-index: 1;
      @include mobile-only {
        left: 30%;
      }
    }

    &-background {
      position: absolute;
      width: 100%;

      @include mobile-only {
        height: 100%;
      }
    }
  }

  &__body {
    padding: 1em;

    &-title {
      font-weight: bold;
    }

    &-description {
      font-weight: normal;
    }

    &-separator {
      border-color: #f9f9f975;
      margin: 0.5em 0em;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 0em 1em;
    padding-bottom: 1em;

    &-button {
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      min-width: 195px;
      min-height: 30px;
      display: flex;
    }

    &-icon {
      height: 44px;
      width: 44px;
    }
  }
}
</style>
