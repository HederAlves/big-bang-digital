<template>
  <div class="navigation-buttons">
    <BaseButton color="secondary" style="width: 30%" @click="navigate('page1')">
      Dashboard
    </BaseButton>
    <BaseButton color="primary" style="width: 35%" @click="navigate('page2')">
      Pagamentos
    </BaseButton>
    <BaseButton color="primary" style="width: 20%" @click="navigate('page3')">
      Invoices
    </BaseButton>
    <BaseButton color="primary" style="width: 20%" @click="navigate('page4')">
      Insights
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "../atoms/BaseButton.vue";

export default {
  name: "NaveMenu",
  components: {
    BaseButton,
  },
  methods: {
    navigate(page) {
      console.log("Nav to:", page);
    },
  },
};
</script>

<style scoped>
.navigation-buttons {
  background: #202027;
  display: flex;
  justify-content: space-between;
  width: 47vw;
  max-width: "477px";
  height: 37px;
}
</style>
