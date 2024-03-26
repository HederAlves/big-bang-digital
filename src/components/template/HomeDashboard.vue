<template>
  <div>
    <BaseHeader />
    <div class="dash-board">
      <InfoPanel />
      <InfoSection />
      <div class="info-account">
        <RecentTransactions />
        <RecentMovements />
      </div>
    </div>
  </div>
</template>

<script>
import InfoPanel from "../molecules/InfoPanel.vue";
import RecentTransactions from "../organism/RecentTransactions.vue";
import RecentMovements from "../organism/RecentMovements.vue";
import BaseHeader from "../organism/BaseHeader.vue";
import InfoSection from "../organism/InfoSection.vue";

export default {
  name: "HomeDashboard",
  components: {
    BaseHeader,
    InfoSection,
    InfoPanel,
    RecentTransactions,
    RecentMovements
  }
};
</script>

<style scoped>
.dash-board {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  height: 350px;
  width: 100%;
  background-color: #202027;
}

.info-account {
  display: flex;
  gap: 15rem;
  padding-bottom: 60px;
}
</style>
