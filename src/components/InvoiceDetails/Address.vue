<script>
export default {
  props: ["street", "city", "postCode", "country"],
  components: {},
  data: function () {
    return {};
  },
};
</script>

<template>
  <address class="address">
    {{ street }} <br />
    {{ city }}<br />{{ postCode }}<br />{{ country }}
  </address>
</template>

<style scoped>
.address {
  color: var(--text-primary-color);
  font-size: 0.9rem;
}
</style>
