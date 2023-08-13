import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppIcon from '@/components/AppIcon.vue'

describe('AppIcon', () => {
    it('renders the default icon with correct attributes', () => {
        const wrapper = mount(AppIcon);
        expect(wrapper.find('svg').attributes('width')).toBe('20');
        expect(wrapper.find('svg').attributes('height')).toBe('20');
        expect(wrapper.find('title').text()).toBe('box icon');
        expect(wrapper.find('g').attributes('fill')).toBe('currentColor');
      });
    
      it('renders a custom icon with provided attributes', () => {
        const wrapper = mount(AppIcon, {
          props: {
            iconName: 'star',
            width: 24,
            height: 24,
            iconColor: 'gold'
          },
          slots: {
            default: '<path d="M12 2..."/>'
          }
        });
    
        expect(wrapper.find('svg').attributes('width')).toBe('24');
        expect(wrapper.find('svg').attributes('height')).toBe('24');
        expect(wrapper.find('title').text()).toBe('star icon');
        expect(wrapper.find('g').attributes('fill')).toBe('gold');
        expect(wrapper.find('path').exists()).toBe(true);
      });
    
      it('renders a custom icon with provided slot content', () => {
        const wrapper = mount(AppIcon, {
          slots: {
            default: '<circle cx="12" cy="12" r="10"/>'
          }
        });
    
        expect(wrapper.find('circle').exists()).toBe(true);
      });
})
