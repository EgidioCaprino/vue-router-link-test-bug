import { mount } from '@vue/test-utils';
import App from '@/App.vue';

it('should stub router link and router view without warnings', () => {
  mount(App, { global: { stubs: ['router-link', 'router-view'] } });
});
