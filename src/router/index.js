import { createRouter,createWebHistory } from 'vue-router';
//import App from '../App.vue';
import VideoPage from '../components/VideoPage.vue';
import HomeLanding from '../components/HomeLanding.vue';


const routes = [
  { path: '/', component: HomeLanding }, // Redirect from root to video-page
  { path: '/video-page', component: VideoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('Navigation:', 'From', from.fullPath, 'To', to.fullPath);
  next();
});

export default router;
