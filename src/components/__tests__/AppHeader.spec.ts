import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'
import HomeView from '../../views/HomeView.vue'
import LoginView from '../../views/LoginView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView }
  ];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

describe('Header', () => {
    it('renders correctly when not on login route', () => {
        const wrapper = mount(AppHeader, {
            global: {
              mocks: {
                $route: {
                  name: 'home'
                }
              },
              plugins: [router], 
            }
          });
    
        const header = wrapper.find('header');
        expect(header.exists()).toBe(true);
    
        const nav = wrapper.find('nav');
        expect(nav.exists()).toBe(true);
    
        const routerLink = wrapper.findComponent({ name: 'RouterLink' });
        expect(routerLink.exists()).toBe(true);
      });
    });