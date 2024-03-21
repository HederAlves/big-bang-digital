<template>
  <header class="header">
    <img style="padding-right: 10px;" src="@/assets/big-bang.svg" />
    <NavMenu />
    <BaseButton color="primary" size="sm" @click="navigate('page Notification')">
      <img src="@/assets/notification.svg" />
    </BaseButton>
  </header>
</template>

<script>
import BaseButton from '../atoms/BaseButton.vue';
import NavMenu from '../molecules/NavMenu';

export default {
  name: 'BaseHeader',
  components: {
    NavMenu,
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
.header {
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #202027;
  color: white;
}
</style>
