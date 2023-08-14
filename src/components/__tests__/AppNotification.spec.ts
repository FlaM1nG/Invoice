import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppNotification from '@/components/AppNotification.vue';

describe('Notification', () => {
  it('renders correctly when showNotification is false', () => {
    const wrapper = mount(AppNotification, {
      props: {
        showNotification: false,
      },
    });

    expect(wrapper.find('.notification').exists()).toBe(false);
  });
});