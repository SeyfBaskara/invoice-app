<script>
export default {
  data: function () {
    return {
      selected: "status",
    };
  },
};
</script>

<template>
  <section class="drop-menu">
    <ul class="menu-list">
      <li v-for="(item, index) of ['Draft', 'Pending', 'Paid']" :key="index">
        <label class="item-label">
          <input type="radio" v-model="selected" :value="item" />
          {{ item }}
        </label>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.drop-menu {
  background-color: white;
  width: 180px;
  padding: 1rem;
  position: absolute;
  right: -3rem;
  top: 3rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 100;
}
.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.item-label {
  display: flex;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
}
@media screen and (min-width: 480px) {
  .drop-menu {
    right: -1rem;
  }
}
</style>
