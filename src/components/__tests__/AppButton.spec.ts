import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppButton from '@/components/AppButton.vue';

describe('AppButton', () => {
  it('renders correctly when enabled', () => {
    const wrapper = mount(AppButton, {
      props: {
        isDisabled: false,
      },
    });

    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('.btn').exists()).toBe(true);
  });

  it('renders correctly when disabled', () => {
    const wrapper = mount(AppButton, {
      props: {
        isDisabled: true,
      },
    });

    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('.btn').exists()).toBe(true);
  });

  it('applies background color class', () => {
    const bgColorText = 'bg-red-500';
    const wrapper = mount(AppButton, {
      props: {
        isDisabled: false,
        bgColorText,
      },
    });

    expect(wrapper.find('.btn').classes()).toContain(bgColorText);
  });

});