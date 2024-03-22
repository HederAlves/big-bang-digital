<template>
  <div>
    <BaseHeader />
    <div class="dash-board">
      <InfoPanel />
      <InfoSection />
      <ListTransactions />
      <ListTransactions />
    </div>
  </div>
</template>

<script>
import InfoPanel from '../molecules/InfoPanel.vue';
import ListTransactions from '../molecules/ListTransactions.vue';
import BaseHeader from '../organism/BaseHeader.vue';
import InfoSection from '../organism/InfoSection.vue';

export default {
  name: "HomeDashboard",
  components: {
    BaseHeader,
    InfoSection,
    InfoPanel,
    ListTransactions,
  },
};
</script>

<style scoped>
.dash-board {
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 100%;
  background-color: #202027;
  justify-content: center;
  align-items: center;
}
</style>
