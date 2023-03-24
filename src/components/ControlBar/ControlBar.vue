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
  methods: {
    handleAddnew() {
      console.log("add new");
    },
    handleFilter() {
      console.log("filter");
    },
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
        <h4>Filter <span class="controlbar_hidden">by status</span></h4>
        <IconArrowDown @click="handleFilter" />
      </div>
      <div class="addnew">
        <div @click="handleAddnew" class="addnew__plus-icon">
          <IconPlus />
        </div>
        <h4>New <span class="controlbar_hidden">Invoice</span></h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
.controlbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.controlbar_hidden {
  display: none;
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
  gap: 0.8rem;
}
.filter:nth-child(1) {
  cursor: pointer;
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
  cursor: pointer;
}
.addnew > h4 {
  color: white;
}

@media screen and (min-width: 480px) {
  .controlbar__right {
    width: 340px;
  }
  .controlbar_hidden {
    display: block;
  }
  .filter > h4 {
    display: flex;
    gap: 0.3rem;
  }
  .addnew > h4 {
    display: flex;
    gap: 0.3rem;
  }
}
</style>
