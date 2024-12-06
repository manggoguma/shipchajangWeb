import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import TermsPage from '@/pages/TermsPage.vue';
import RulePage from '@/pages/RulePage.vue';
import PrivacyPage from '@/pages/PrivacyPage.vue';
import contactPage from '@/pages/contactPage.vue';
import locationPage from '@/pages/LocationPage.vue'

const routes = [
  {
    path: '/', // 기본 경로
    name: 'Home',
    component: HomePage,
    meta : {footer:'main'},
  },
  
  {
    path: '/terms',
    name: 'TermsPage',
    component: TermsPage,
   
  },
  {
    path: '/rule',
    name: 'RulePage',
    component: RulePage,
   
  },
  {
    path: '/privacy',
    name: 'PrivacyPage',
    component: PrivacyPage,
  
  },
  {
    path: '/contactPage',
    name: 'contactPage',
    component: contactPage,
    meta : {footer:'sub'},
  },
  {
    path: '/locationPage',
    name: 'locationPage',
    component: locationPage,
    meta : {footer:'sub'},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
