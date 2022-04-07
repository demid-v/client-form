<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  components: {
    Form,
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
}
</style>
