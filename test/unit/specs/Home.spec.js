import Vue from 'vue';
import store from '@/stores';
import Home from '@/components/views/home';
import consolas from '@/plugins/consolas';

jest.mock('@/stores');
jest.mock('@/plugins/consolas');

Vue.use(consolas);

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home h1').textContent).toEqual('Welcome Home!');
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    expect(vm.$el.querySelector('.home p').textContent).toEqual('Using store Global Store version 10.0.0 by "Olivier"');
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    const li = vm.$el.querySelector('ul.messages-list').children.item(0);
    // fkn trim the content because vuejs add tabs
    expect(li.textContent.trim()).toEqual('message 1');
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor({ store }).$mount();
    const li = vm.$el.querySelector('ul.todos-list').children.item(0);
    // fkn trim the content because vuejs add tabs
    expect(li.textContent.trim()).toEqual('todo 1');
  });
});
