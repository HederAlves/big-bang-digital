<template>
  <img :style="{ backgroundColor: backgroundColor }" class="base-icon" :src="imageSrc" />
</template>

<script>
import shopIcon from "@/assets/shop.svg";

const iconImages = {
  shop: shopIcon,
};

export default {
  name: "BaseIcon",
  props: {
    iconType: {
      type: String,
      default: "shop"
    },
    backgroundColor: {
      type: String,
      default: "white"
    }
  },
  computed: {
    imageSrc() {
      return iconImages[this.iconType] || shopIcon;
    }
  }
};
</script>

<style scoped>
.base-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  padding: 6px;
}
</style>
