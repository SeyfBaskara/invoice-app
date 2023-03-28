<script>
export default {
  components: {},
  data: function () {
    return {
      invoices: [],
    };
  },
  methods: {
    async fetchInvoices() {
      const res = await fetch("http://localhost:5000/invoices");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.invoices = await this.fetchInvoices();
  },
};
</script>

<template>
  <div class="invoices">
    <ul class="invoices__list">
      <li v-for="invoice in invoices" :key="invoice.id" class="invoice__item">
        <div class="invoice__header">
          <p class="header__id">#{{ invoice.id }}</p>
          <p class="header__name">{{ invoice.clientName }}</p>
        </div>
        <div class="invoice__body">
          <div>
            <p>Due {{ invoice.paymentDue }}</p>
            <p>{{ invoice.total }}</p>
          </div>
          <p class="body__status">{{ invoice.status }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.invoices {
  margin-top: 2rem;
}
.invoices__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.invoice__item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 10px;
  padding: 1.2rem;
}
.invoice__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__id {
  font-size: small;
  font-weight: bold;
}
.header__name {
  font-size: small;
  color: var(--text-primary-color);
}
.invoice__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body__status {
  background-color: lightpink;
  width: 100px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  font-size: small;
  padding: 0.5rem;
}
/* .body__status::before {
  content: "\2022";
  display: inline-block;
  width: 1rem;
  position: relative;
  top: 7px;
  right: 10px;
  font-size: xx-large;
} */
</style>
