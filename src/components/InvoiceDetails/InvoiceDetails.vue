<script>
import Address from "./Address.vue";

export default {
  components: {
    Address,
  },
  props: ["invoiceDetails"],
  data: function () {
    return {};
  },
};
</script>

<template>
  <section>
    <div>
      <div>
        <p>{{ invoiceDetails.id }}</p>
        <p>{{ invoiceDetails.description }}</p>
      </div>
      <!-- <Address :address="invoiceDetails.senderAddress" /> -->
    </div>
    <div>second block</div>
    <div>third block</div>
  </section>
</template>

<style scoped></style>
