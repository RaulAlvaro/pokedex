<template>
  <div class="loader-container">
    <div class="loader-style">
      <img src="../../assets/images/loader.png" alt="Hello Pikachu" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/settings/colors';

.loader-container {
  background-color: $color-primary;
  height: 100vh;
  overflow-y: hidden;
  .loader-style {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(3, 3);

    &:before,
    &:after {
      content: '';
      display: block;
      height: 30px;
      width: 30px;
      border: 2px solid #f5f5f5;
      border-radius: 50%;
      border-left-color: transparent;
      border-right-color: transparent;
      animation: linear outer 1s infinite;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -17px;
      margin-top: -17px;
    }

    &:before {
      height: 20px;
      width: 20px;
      margin-left: -12px;
      margin-top: -12px;
      border-color: transparent #f5f5f5;
      animation: linear inner 0.5s infinite;
    }
  }

  @keyframes outer {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes inner {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 50%;
    margin-left: -17px;
    margin-top: -17px;
    animation: linear pulse 1s infinite;
    animation: linear pulse 1s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0, 0);
    }

    50% {
      transform: scale(0.4, 0.4);
    }
  }
}
</style>
