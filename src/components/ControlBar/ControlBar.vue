<script>
import IconArrowDown from "../../assets/icons/IconArrowDown.vue";
import IconPlus from "../../assets/icons/IconPlus.vue";

export default {
  components: {
    IconArrowDown,
    IconPlus,
  },
  data: function () {
    return {};
  },
};
</script>

<template>
  <section class="controlbar">
    <div class="invoices">
      <h2>Invoices</h2>
      <p>7 invoices</p>
    </div>
    <div class="controlbar__right">
      <div class="filter">
        <h4>Filter</h4>
        <IconArrowDown />
      </div>
      <div class="addnew">
        <div class="addnew__plus-icon">
          <IconPlus />
        </div>
        <h4 class="addnew__text">New</h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
.controlbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.invoices {
  line-height: 1.5rem;
}
.invoices > h2 {
  font-size: 1.38rem;
}
.invoices > p {
  color: var(--text-primary-color);
}
.controlbar__right {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}
.addnew {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--primary-color);
  border-radius: 25px;
}
.addnew__plus-icon {
  background-color: var(--bg-light-color);
  padding: 0.8rem;
  border-radius: 50%;
}
.addnew__text {
  color: white;
}
</style>
