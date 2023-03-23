<script>
import Header from "./Header/Header.vue";

export default {
  name: "Layout",
  components: {
    Header,
  },
};
</script>

<template>
  <div class="page">
    <Header />
    <slot />
  </div>
</template>

<style scoped>
@media screen and (min-width: 976px) {
  .page {
    display: flex;
    height: 100vh;
  }
}
</style>
