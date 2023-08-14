import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppFooter, {
      global: {
        mocks: {
          $t: (key: any) => key, 
        },
      },
    });

    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('.bg-gradient-to-r').exists()).toBe(true);
  });

  it('renders current year', () => {
    const wrapper = mount(AppFooter, {
      global: {
        mocks: {
          $t: (key:any) => key,
        },
      },
    });

    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear.toString());
  });
});