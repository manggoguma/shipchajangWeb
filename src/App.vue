<template>
  <div>
    <NavBar />
    <router-view />
    <div>
      <footerPage v-if="$route.meta.footer === 'main'" />
      <subFooterPage v-else-if="$route.meta.footer === 'sub'" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import footerPage from './pages/footer.vue';
import subFooterPage from './pages/subFooter.vue';

export default {
  name: "App",
  components: {
    NavBar,
    footerPage,
    subFooterPage,
  },
};
</script>


<style>
@import "./global.css";
</style>
