<template>
  <div>
    <Fullpage />
    <featuresPage />
    <NumCard />
    <aboutUs />
  </div>
</template>

<script>
import Fullpage from './FullPage.vue';

import featuresPage from './features.vue';
import NumCard from './numCard.vue';
import aboutUs from './aboutUs.vue';


export default {
  name: "App",
  components: {

    Fullpage,

    featuresPage,
    NumCard,
    aboutUs

  },
};
</script>

<style></style>