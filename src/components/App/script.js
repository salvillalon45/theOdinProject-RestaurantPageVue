import HeaderComponent from '../Header/index.vue';
import FooterComponent from '../Footer/index.vue';
import JumbotronComponent from '../Jumbotron/index.vue';

export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'jumbotron-component': JumbotronComponent,
  },
  data() {
    return {};
  },
};
