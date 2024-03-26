<template>
  <header class="header-list">
    <div class="title-container">
      <img :src="imageUrl" />
      <h3 :style="{ fontFamily: titleFontFamily }">{{ title }}</h3>
      <p class="date-transactions">últimos 7 dias</p>
    </div>
    <a :href="linkUrl" class="link-transactions">ver tudo</a>
  </header>
</template>

<script>

export default {
  name: "BaseHeaderList",
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleFontFamily: {
      type: String,
      default: "inherit"
    },
    linkUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.header-list {
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #B3B3B3;
  padding-bottom: 30px;
}

.title-container {
  display: flex;
  gap: 12px;
  align-items: center;
}

.date-transactions {
  font-size: 14px;
  font-weight: 500;
  color: #A3A3A3;
}

.link-transactions {
  color: #7986FE;
  text-decoration-line: none;
}
</style>
