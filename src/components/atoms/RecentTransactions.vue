<template>
  <div class="layout">
    <div class="store">
      <img src="@/assets/store.svg" />
    </div>
    <div class="result">
      <p>{{ recentTransactions.name }}</p>
      <p>R$: {{ recentTransactions.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentTransactions",
  props: {
    recentTransactions: Object,
  },
};
</script>

<style scoped>
.layout {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.result {
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.title {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
</style>
