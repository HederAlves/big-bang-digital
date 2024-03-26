<template>
  <section>
    <BaseHeaderList :imageUrl="boxImgUrl" :title="'Transações recentes'" :titleFontFamily="'Arial, sans-serif'"
      :linkUrl="'URL_do_destino'" />
    <ListTransactions v-for="transaction in $store.state.recentTransactions" :key="transaction.id"
      :recentTransaction="transaction" />
  </section>
</template>

<script>
import BaseHeaderList from '../atoms/BaseHeaderList.vue';
import ListTransactions from "../molecules/ListTransactions.vue";

export default {
  name: "RecentTransactions",
  components: { ListTransactions, BaseHeaderList },
  data() {
    return {
      boxImgUrl: require('@/assets/box.svg')
    };
  }
};
</script>
