<template>
  <section>
    <BaseHeaderList :imageUrl="storyImageUrl" :title="'Análise geral'" :titleFontFamily="'Arial, sans-serif'"
      :linkUrl="'URL_do_destino'" />
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
