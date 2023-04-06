<script>
import Address from "./Address.vue";

export default {
  name: "InvoiceDetails",
  components: {
    Address,
  },
  props: [
    "id",
    "description",
    "senderAddress",
    "clientAddress",
    "createdAt",
    "paymentDue",
    "clientName",
    "clientEmail",
  ],
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

    <div class="invoice__body">
      <div class="inner-block">
        <div class="dates">
          <p class="date">
            Invoice date <br /><span>{{ createdAt }}</span>
          </p>
          <p class="date">
            Payment Due <br /><span>{{ paymentDue }}</span>
          </p>
        </div>

        <div>
          <p class="client-name">
            Bill to <br /><span>{{ clientName }}</span>
          </p>
          <Address v-bind="clientAddress" />
        </div>
      </div>
      <p class="client-email">
        Sent to <br />
        <span>{{ clientEmail }}</span>
      </p>
    </div>

    <div>third block</div>
  </section>
</template>

<style scoped>
.invoice {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 1.7rem 1rem;
  margin-bottom: 9rem;
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

.invoice__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.inner-block {
  display: flex;
  gap: 2.5rem;
}
.dates {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.date,
.client-name,
.client-email {
  color: var(--text-primary-color);
  font-size: 0.9rem;
}
.date > span,
.client-name > span,
.client-email > span {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
}
.client-name {
  margin-bottom: 0.5rem;
}
</style>
