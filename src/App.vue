<template>
  <div id="app">
    <Carousel />
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss">
@import url("./assets/base.scss");

.app-header {
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
}
</style>
