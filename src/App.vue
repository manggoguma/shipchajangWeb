<template>
  <div>
    <playStores/>
    <featuresPage/>
    <footerPage/>
  </div>
</template>

<script>
import playStores from './pages/playstores.vue';
import featuresPage from './pages/features.vue'
import footerPage from './pages/footer.vue'


export default {
  name: 'App',
  components: {
    playStores,
    featuresPage,
    footerPage
  
  },
};
</script>

<style>
/* 스타일 추가 */
</style>
