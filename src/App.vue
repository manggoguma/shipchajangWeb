<template>
  <div>
    <NavBar class="navBar"/>
    <router-view />
    <div>
      <goTop/>
      <goBottom/>
      <footerPage v-if="$route.meta.footer === 'main'" />
      <subFooterPage v-else-if="$route.meta.footer === 'sub'" />
    </div>
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

</style>
