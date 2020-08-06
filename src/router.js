import Vue from 'vue';
import Router from 'vue-router';
import OurStory from './components/OurStory/index.vue';
import Jumbotron from './components/Jumbotron/index.vue';
import Locations from './components/Locations/index.vue';
import Menu from './components/Menu/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jumbotron',
      component: Jumbotron,
    },
    {
      path: '/OurStory',
      name: 'OurStory',
      component: OurStory,
    },
    {
      path: '/Locations',
      name: 'Locations',
      component: Locations,
    },
    {
      path: '/Menu',
      name: 'menu',
      component: Menu,
    },
  ],
});
