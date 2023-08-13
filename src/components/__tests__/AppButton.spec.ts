import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('AppButton', () => {
    it('renders button correctly', () => {
      const wrapper = mount(AppButton)
      expect(wrapper.exists()).toBe(true)
    })
    it('emits custom-click event when clicked', async () => {
      const wrapper = mount(AppButton)
      await wrapper.trigger('click')
      expect(wrapper.emitted()['custom-click']).toBeTruthy()
    })
    it('disables button when isDisabled prop is true', () => {
      const wrapper = mount(AppButton, {
        props: {
          isDisabled: true,
        },
      })
      expect(wrapper.find('button').element.disabled).toBe(true)
    })
    it('applies custom background color class when bgColorText prop is provided', () => {
      const bgColor = 'bg-custom-color'
      const wrapper = mount(AppButton, {
        props: {
          bgColorText: bgColor,
        },
      })
      expect(wrapper.find('button').classes()).toContain(bgColor)
    })
})
