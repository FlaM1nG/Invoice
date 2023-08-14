import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import AppIcon from '@/components/AppIcon.vue'; 
import IconInvoice from '@/components/icons/IconInvoice.vue'; 

describe('AppHeader', () => {
  it('renders correctly on home route', async () => {
    const routes = [
      { path: '/', name: 'home', component: HomeView },
      { path: '/login', name: 'login', component: LoginView },
    ];

    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const wrapper = mount(AppHeader, {
      global: {
        components: {
          AppIcon,
          IconInvoice,
        },
        plugins: [router],
        mocks: {
          $t: (key: any) => key, // Mock the translation function
        },
      },
    });

    router.push('/');
    await router.isReady();

    const routerLink = wrapper.findComponent({ name: 'RouterLink' });
    expect(routerLink.exists()).toBe(true);

    router.push('/'); 
    await router.isReady();
  });

  it('renders correctly on login route', async () => {
    const routes = [
      { path: '/', name: 'home', component: HomeView },
      { path: '/login', name: 'login', component: LoginView },
    ];

    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });


    router.push('/login');
    await router.isReady();

    router.push('/');
    await router.isReady();
  });
});