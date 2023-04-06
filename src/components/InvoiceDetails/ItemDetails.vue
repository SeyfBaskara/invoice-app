<script>
import { formatCurrency } from "../../utils/formatCurrency";

export default {
  name: "itemDetails",
  components: {},
  props: ["items", "total"],
  data: function () {
    return {};
  },
  methods: {
    formatCurrency,
  },
};
</script>

<template>
  <div class="items">
    <ul class="item__lists">
      <li v-for="(item, index) in items" :key="index" class="item">
        <div class="item__name-block">
          <p class="name">{{ item.name }}</p>
          <div class="qty-price">
            <p class="quantity">{{ item.quantity }}</p>
            <p>{{ formatCurrency(item.price) }}</p>
          </div>
        </div>
        <p class="total">{{ formatCurrency(item.total) }}</p>
      </li>
    </ul>
    <p class="grand-total">
      Grand Total <span>{{ formatCurrency(total) }}</span>
    </p>
  </div>
</template>

<style scoped>
.items {
  background-color: var(--bg-light-color);
  border-radius: 10px;
}
.item__lists {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  padding: 1.2rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name,
.total,
.qty-price {
  font-weight: bold;
}
.qty-price {
  display: flex;
  color: var(--text-primary-color);
}
.quantity::after {
  content: "x";
  display: inline-block;
  margin: 0 5px;
}
.grand-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-primary-color);
  color: var(--text-primary-color);
  font-weight: bold;
  padding: 1.2rem 1.2rem;
  border-radius: 0 0 10px 10px;
}
.grand-total > span {
  font-size: 1.7rem;
  color: white;
}
</style>
