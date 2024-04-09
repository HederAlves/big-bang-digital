<template>
  <section>
    <BaseHeaderList :imageUrl="storyImageUrl" :title="'Análise geral'" :titleFontFamily="'Arial, sans-serif'"
      :linkUrl="'URL_do_destino'" />
    <div class="section-values">
      <div>
        <h2 class="title">Ganhos</h2>
        <p class="value">R$ 2.789,21</p>
      </div>
      <div>
        <h2 class="title">Saídas</h2>
        <p class="value">R$ 1.278,47</p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseHeaderList from '../atoms/BaseHeaderList.vue';

export default {
  name: "RecentMovements",
  components: { BaseHeaderList },
  data() {
    return {
      storyImageUrl: require('@/assets/story.svg')
    };
  }
};
</script>

<style scoped>
.title {
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}

.value {
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
}

.section-values {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px 12px 16px;
  border-bottom: 1px solid #ccc;
}
</style>