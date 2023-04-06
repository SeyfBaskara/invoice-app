<script setup>
import Layout from "../components/Layout/Layout.vue";
import IconArrowLeft from "../assets/icons/IconArrowLeft.vue";
import StatusWidget from "../components/InvoiceDetails/StatusWidget.vue";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails.vue";

import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useInvoicesStore } from "../stores/invoices";

const router = useRouter();
const store = useInvoicesStore();

const { invoiceDetails } = storeToRefs(store);
const { status } = invoiceDetails.value;

function handleGoBack() {
  router.push("/");
}
</script>

<template>
  <Layout>
    <main class="view-details">
      <div class="details__redirect" @click="handleGoBack">
        <IconArrowLeft />
        <p>Go Back</p>
      </div>
      <StatusWidget :status="status" />
      <InvoiceDetails v-bind="invoiceDetails" />
    </main>
  </Layout>
</template>

<style scoped>
.view-details {
  padding: 1.2rem;
}
.details__redirect {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.details__redirect > p {
  font-weight: bold;
}
@media screen and (min-width: 768px) {
  .view-details {
    width: 80vw;
    margin: 0 auto;
  }
}
@media screen and (min-width: 976px) {
  .view-details {
    width: 65vw;
  }
}
</style>
