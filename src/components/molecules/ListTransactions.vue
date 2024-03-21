<template>
  <div>
    <div class="section">
      <img src="@/assets/box.svg" />
      <h3 style="padding: 18px;">Transações recentes</h3>
      <span class="span-transactions">últimos 7 dias</span>
      <a href="URL_do_destino" class="link-transactions">ver tudo</a>
    </div>
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

<style scoped>
.section {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.span-transactions {
  color: blue;
  font-size: 14px;
  margin-top: 22px;
  font-weight: 500;
  color: #A3A3A3;
}

.link-transactions {
  padding: 0px 20px;
  margin-top: 22px;
  text-decoration-line: none;
}
</style>
