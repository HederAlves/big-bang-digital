<template>
  <div class="table">
    <header class="header-table">
      <img src="@/assets/box.svg" />
      <h3 style="transactions">Transações recentes</h3>
      <p class="data-transactions">últimos 7 dias</p>
      <a href="URL_do_destino" class="link-transactions">ver tudo</a>
    </header>
    <RecentTransactions v-for="transaction in $store.state.recentTransactions" :key="transaction.id"
      :recentTransaction="transaction" />
  </div>
</template>

<script>
import RecentTransactions from "../atoms/RecentTransactions.vue";

export default {
  components: { RecentTransactions },
  name: "ListTransactions",
};
</script>

<style scoped>
.table {
  margin: 26px 98px;
  padding-bottom: 20px;
}

.header-table {
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #B3B3B3;
  margin-top: 10px;
  padding-bottom: 16px;
}

.data-transactions {
  font-size: 14px;
  font-weight: 500;
  color: #A3A3A3;
}

.link-transactions {
  margin-left: 60px;
  color: #7986FE;
  text-decoration-line: none;
}
</style>