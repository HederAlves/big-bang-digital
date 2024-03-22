<template>
  <section class="recent-transactions">
    <BaseIcon iconType="shop" :backgroundColor="recentTransaction.backgroundColor" />
    <div class="value-transactions">
      <p>{{ recentTransaction.name }}</p>
      <p>R$: {{ recentTransaction.value }}</p>
    </div>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  components: { BaseIcon },
  name: "RecentTransactions",
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