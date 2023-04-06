<script>
import Address from "./Address.vue";

export default {
  name: "InvoiceDetails",
  components: {
    Address,
  },
  props: ["id", "description", "senderAddress", "clientAddress"],
  data: function () {
    return {};
  },
};
</script>

<template>
  <section class="invoice">
    <div class="invoice__header">
      <div>
        <p class="id">#{{ id }}</p>
        <p class="description">{{ description }}</p>
      </div>
      <Address v-bind="senderAddress" />
    </div>

    <div class="invoice_body">
      <div>
        <div>
          <p>Invoice date</p>
          <p>Payment Due</p>
        </div>
        <div>
          <p>Bill to</p>
          <Address v-bind="clientAddress" />
        </div>
      </div>
      <p>Sent to</p>
    </div>

    <div>third block</div>
  </section>
</template>

<style scoped>
.invoice {
  background-color: white;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 1.7rem 1rem;
}
.invoice__header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.id {
  font-weight: bold;
}
.description {
  color: var(--text-primary-color);
  font-size: 0.9rem;
  margin-top: -0.2rem;
}
</style>
