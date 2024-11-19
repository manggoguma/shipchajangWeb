<template>
  <div>
    <playStores/>
    <featuresPage/>
  </div>
</template>

<script>
import playStores from './pages/playstores.vue';
import featuresPage from './pages/features.vue'

export default {
  name: 'App',
  components: {
    playStores,
    featuresPage
  },
};
</script>

<style>
/* 스타일 추가 */
</style>
