<template>
    <div>
      <Fullpage />
    <NumCard />

      <playStores />
      <featuresPage />
 
      
      
    </div>
  </template>
  
  <script>
  import Fullpage from './FullPage.vue';
  import playStores from './playstores.vue';
  import featuresPage from './features.vue';
  import NumCard from './numCard.vue';
  
  
  export default {
    name: "App",
    components: {
     
      Fullpage,
      playStores,
      featuresPage,
      
      NumCard,
      
    },
  };
  </script>
  
  <style>

  </style>