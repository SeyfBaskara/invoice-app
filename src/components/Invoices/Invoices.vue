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
  <div>
    <ul>
      <li v-for="invoice in invoices" :key="invoice.id">
        <div>
          <p>{{ invoice.id }}</p>
          <p>{{ invoice.clientName }}</p>
        </div>
        <div>
          <div>
            <p>{{ invoice.paymentDue }}</p>
            <p>{{ invoice.total }}</p>
          </div>
          <p>{{ invoice.status }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
