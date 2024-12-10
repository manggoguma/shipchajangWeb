<template>
  <div class="homepageDiv">

     <onboardingPage class="onboard"/>
    <featuresPage />
    <NumCard />
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

</style>