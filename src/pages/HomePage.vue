<template>
  <div class="homepageDiv">

     <onboardingPage class="onboard"/>
    <featuresPage  class="features"/>
    <NumCard   class="numcard"/>
    <aboutUs />
  </div>
</template>

<script>

import onboardingPage from './onboarding.vue';
import featuresPage from './features.vue';
import NumCard from './numCard.vue';
import aboutUs from './aboutUs.vue';


export default {
  name: "App",
  components: {

    featuresPage,
    NumCard,
    aboutUs,
    onboardingPage

  },
};
</script>

<style> 
.features{margin-top : 30rem;}
@media screen and (max-width: 1024px) {.features{margin-top : 30rem;}};
@media screen and (max-width: 768px) {.features{margin-top : 30rem;}};
@media screen and (max-width: 480px) {.features{margin-top : 10rem;}.numcard{margin-top : 10rem;margin-bottom : 10rem;}}

</style>