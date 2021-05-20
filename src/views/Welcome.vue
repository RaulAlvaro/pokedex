<template>
  <div class="welcome">
    <img
      class="welcome__image-hello"
      src="../assets/images/pikachu-hello.svg"
      alt="Hello Pikachu"
    />
    <h1 class="welcome__title">Welcome to Pokédex</h1>
    <p class="welcome__subtitle">
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pókemon world.
    </p>
    <button class="button-pokedex welcome__button-getstarted" @click="goHome">
      Get started
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/home');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/settings/colors';
@import '~@/assets/scss/settings/media';
@import '~@/assets/scss/settings/button';

.welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 24vw;

  @include mobile-only {
    padding: 0 8vw;
  }

  &__image-hello {
    height: 288px;
    margin-bottom: 2em;
    width: 325px;

    @include mobile-only {
      height: 144px;
      margin-bottom: 1em;
      width: 162px;
    }
  }

  &__title {
    font-family: system-ui;
    font-size: 26px;
    font-weight: 700 !important;
    margin-bottom: 2em;
  }

  &__subtitle {
    font-family: system-ui;
    font-size: 18px;
    margin-bottom: 3em;
    text-align: center;
  }

  &__button-getstarted {
    min-height: 44px;
    min-width: 131px;
  }
}
</style>
