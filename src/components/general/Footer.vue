<template>
  <div class="footer">
    <div
      @click="filterAll"
      class="footer__button mr-2"
      :class="!isFilterFavorite && 'footer__button--active'"
    >
      <img
        class="footer__button-icon"
        src="../../assets/images/all.svg"
        alt="favourite"
      />
      <div class="footer__button-text">All</div>
    </div>
    <div
      @click="filterFavorites"
      class="footer__button ml-2"
      :class="isFilterFavorite && 'footer__button--active'"
    >
      <img
        class="footer__button-icon"
        src="../../assets/images/star.svg"
        alt="favourite"
      />
      <div class="footer__button-text">Favorites</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapMutations(['setIsFilterFavorite']),
    filterAll() {
      this.setIsFilterFavorite(false);
    },
    filterFavorites() {
      this.setIsFilterFavorite(true);
    },
  },
  computed: {
    ...mapGetters(['isFilterFavorite']),
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/settings/colors';
@import '~@/assets/scss/settings/media';

.footer {
  align-items: center;
  background-color: white;
  box-shadow: 0px -5px 13px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100%;

  &__button {
    align-items: center;
    background-color: $color-star;
    border-radius: 60px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    justify-content: center;
    margin-right: 20px;
    min-width: 275px;
    min-height: 44px;
    display: flex;
    @include mobile-only {
      min-width: 150px;
      min-height: 44px;
    }

    &--active {
      background-color: $color-primary;
    }
    &-icon {
      margin-right: 10px;
    }

    &-text {
      margin-top: 3px;
    }
  }
}
</style>
