<template>
  <div>
    <NavBar />
    <router-view /> <!-- 라우터 컴포넌트를 렌더링 -->
    <footerPage />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import footerPage from './pages/footer.vue';

export default {
  name: "App",
  components: {
    NavBar,
    footerPage,
  },
};
</script>

<style>
@import "./global.css";
</style>
