<script>
import { formatCurrency } from "../../utils/formatCurrency";
import IconArrowRight from "../../assets/icons/IconArrowRight.vue";
import EmptyInvoiceFigure from "./EmptyInvoiceFigure.vue";

export default {
  components: {
    IconArrowRight,
    EmptyInvoiceFigure,
  },
  data: function () {
    return {
      invoices: [],
      isMobile: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
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
    formatCurrency,
    checkScreenSize() {
      this.isMobile = window.innerWidth > 480;
    },
  },
  async created() {
    this.invoices = await this.fetchInvoices();
  },
  computed: {
    isInvoicesEmpty() {
      return this.invoices.length === 0;
    },
  },
};
</script>

<template>
  <div class="invoices">
    <EmptyInvoiceFigure v-if="isInvoicesEmpty" />
    <ul v-else class="invoices__list">
      <li v-for="invoice in invoices" :key="invoice.id" class="invoice__item">
        <div class="invoice__header">
          <p class="invoice__id">#{{ invoice.id }}</p>
          <p class="invoice__name">{{ invoice.clientName }}</p>
        </div>
        <div class="invoice__body">
          <div class="body__item">
            <p class="invoice__date">Due {{ invoice.paymentDue }}</p>
            <p class="invoice__total">{{ formatCurrency(invoice.total) }}</p>
          </div>
          <div class="body__item">
            <p :class="`invoice__status ${invoice.status}`">
              {{ capitalizeFirstLetter(invoice.status) }}
            </p>
            <IconArrowRight v-show="isMobile" />
          </div>
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
.invoice__status {
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
.draft {
  background-color: rgba(231, 233, 233, 0.5);
  color: black;
}
.invoice__status::before {
  content: "\2022";
  display: inline-block;
  position: relative;
  top: 3px;
  margin-right: 0.3rem;
  font-size: x-large;
}

@media screen and (min-width: 480px) {
  .invoice__item {
    flex-direction: row;
    justify-content: space-between;
  }
  .invoice__header {
    gap: 1rem;
    justify-content: flex-start;
    flex: 1;
  }

  .invoice__body {
    gap: 1rem;
    flex: 2;
  }

  .body__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }
}
</style>
