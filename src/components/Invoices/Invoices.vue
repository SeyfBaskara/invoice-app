<script>
import { formatCurrency } from "../../utils/formatCurrency";

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
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    hasPaid(str) {
      return str === "paid" ? true : false;
    },
    formatCurrency,
  },
  async created() {
    this.invoices = await this.fetchInvoices();
  },
  computed: {},
};
</script>

<template>
  <div class="invoices">
    <ul class="invoices__list">
      <li v-for="invoice in invoices" :key="invoice.id" class="invoice__item">
        <div class="invoice__header">
          <p class="invoice__id">#{{ invoice.id }}</p>
          <p class="invoice__name">{{ invoice.clientName }}</p>
        </div>
        <div class="invoice__body">
          <div>
            <p class="invoice__date">Due {{ invoice.paymentDue }}</p>
            <p class="invoice__total">{{ formatCurrency(invoice.total) }}</p>
          </div>
          <p
            class="body__status"
            :class="[hasPaid(invoice.status) ? 'paid' : 'pending']"
          >
            {{ capitalizeFirstLetter(invoice.status) }}
          </p>
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
.invoice__id {
  font-size: small;
  font-weight: bold;
}
.invoice__name,
.invoice__date {
  font-size: small;
  color: var(--text-primary-color);
}
.invoice__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.invoice__total {
  font-size: large;
  font-weight: bold;
}
.body__status {
  width: 100px;
  text-align: center;
  border-radius: 10px;
  font-weight: bolder;
  font-size: small;
  padding: 0.5rem;
  padding-top: 0;
}
.paid {
  background-color: rgba(204, 246, 218, 0.5);
  color: rgb(80, 221, 127);
}
.pending {
  background-color: rgba(246, 232, 211, 0.5);
  color: orange;
}
.body__status::before {
  content: "\2022";
  display: inline-block;
  position: relative;
  top: 3px;
  margin-right: 0.3rem;
  font-size: x-large;
}
</style>
