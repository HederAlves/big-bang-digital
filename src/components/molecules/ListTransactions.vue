<template>
  <div>
    <RecentTransactions v-for="transactions in $store.state.recentTransactions" :key="transactions.id"
      :recentTransactions="transactions" />
  </div>
</template>

<script>
import RecentTransactions from "../atoms/RecentTransactions.vue";

export default {
  components: { RecentTransactions },
  name: "ListTransactions",
};
</script>
