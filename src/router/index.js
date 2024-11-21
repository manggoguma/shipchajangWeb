import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue'; // Home 페이지를 위한 별도 컴포넌트
import TermsPage from '@/pages/TermsPage.vue';
import RulePage from '@/pages/RulePage.vue';
import PrivacyPage from '@/pages/PrivacyPage.vue';

const routes = [
  {
    path: '/', // 기본 경로
    name: 'Home',
    component: HomePage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
