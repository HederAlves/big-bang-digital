<template>
  <section class="recent-transactions">
    <BaseIcon iconType="shop" :backgroundColor="recentTransaction.backgroundColor" />
    <ul class="value-transactions">
      <li>{{ recentTransaction.name }}</li>
      <li>R$: {{ recentTransaction.value }}</li>
    </ul>
  </section>
</template>

<script>
import BaseIcon from "../atoms/BaseIcon.vue";

export default {
  name: "ListTransactions",
  components: { BaseIcon },
  props: {
    recentTransaction: Object,
  },
};
</script>

<style scoped>
.recent-transactions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #ccc;
  padding-left: 6px;
}

.value-transactions {
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}
</style>
