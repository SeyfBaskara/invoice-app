<script>
import IconArrowDown from "../../assets/icons/IconArrowDown.vue";
import IconPlus from "../../assets/icons/IconPlus.vue";
import FilterDropMenu from "./FilterDropMenu.vue";

export default {
  props: {
    fetchInvoiceByStatus: {
      type: Function,
    },
  },
  components: {
    IconArrowDown,
    IconPlus,
    FilterDropMenu,
  },
  data: function () {
    return {
      isDropMenu: false,
    };
  },
  methods: {
    handleAddnew() {
      console.log("add new");
    },
    handleFilter() {
      this.isDropMenu = !this.isDropMenu;
    },
    closeMenu() {
      this.isDropMenu = false;
    },
  },
  directives: {
    "click-outside": {
      beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
          // here I check that click was outside the el and his children
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            binding.value();
          }
        };
        document.addEventListener("click", el.clickOutsideEvent);
      },
      unmounted: (el) => {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
      stopProp(event) {
        event.stopPropagation();
      },
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
      <div class="filter" v-click-outside="closeMenu">
        <h4>Filter <span class="controlbar_hidden">by status</span></h4>
        <IconArrowDown @click="handleFilter" />
        <FilterDropMenu
          v-show="isDropMenu"
          :fetchInvoiceByStatus="fetchInvoiceByStatus"
        />
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
  position: relative;
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
