import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppIcon from '@/components/AppIcon.vue';

describe('AppIcon', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(AppIcon);

    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.find('[role="presentation"]').exists()).toBe(true);
  });

  it('renders with custom props', () => {
    const iconName = 'check';
    const width = 24;
    const height = 24;
    const iconColor = 'blue';

    const wrapper = mount(AppIcon, {
      props: {
        iconName,
        width,
        height,
        iconColor,
      },
    });

    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.find(`[aria-labelledby="${iconName}"]`).exists()).toBe(true);
    expect(wrapper.find(`[width="${width}"]`).exists()).toBe(true);
    expect(wrapper.find(`[height="${height}"]`).exists()).toBe(true);
  });
});