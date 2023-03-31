<script>
import IllustrationEmpty from "../../assets/icons/IllustrationEmpty.vue";

export default {
  components: { IllustrationEmpty },
};
</script>
<template>
  <div class="illustration-empty">
    <IllustrationEmpty />
    <h2>There is nothing here</h2>
    <p>
      Create an invoice by clicking the
      <span>New</span> button and get started
    </p>
  </div>
</template>

<style scoped>
.illustration-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  text-align: center;
  margin: auto;
}
.illustration-empty > p {
  color: var(--text-primary-color);
}
.illustration-empty > p > span {
  font-weight: bold;
  color: var(--text-secondary-color);
}
</style>
