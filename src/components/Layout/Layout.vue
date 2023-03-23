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
  <Header />
  <slot />
</template>

<style scoped></style>
