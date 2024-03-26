<template>
  <InfoCard v-for="card in cardsInfo" :key="card.id" :value="card.value" :title="card.title" />
</template>

<script>
import { mapState } from "vuex";
import InfoCard from "../molecules/InfoCard.vue";

export default {
  name: "InfoSection",
  components: { InfoCard },
  computed: {
    ...mapState(["cardsInfo"])
  }
};
</script>
