<template>
  <div id="app">
    <NavBar class="navBar" />

    <div class="layout-container">
      <router-view />
      <goTop />
      <goBottom />
    </div>
    <footerPage v-if="$route.meta.footer === 'main'" />
    <subFooterPage v-else-if="$route.meta.footer === 'sub'" />
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';
import footerPage from './pages/footer.vue';
import subFooterPage from './pages/subFooter.vue';
import goTop from './components/topButton.vue'
import goBottom from './components/bottomButton.vue'

export default {
  name: "App",
  components: {
    NavBar,
    footerPage,
    subFooterPage,
    goTop,
    goBottom
  },
  
};
</script>


<style>
@import "./global.css";

.layout-container {
  width: 100vw;
  position: relative;
}

</style>
