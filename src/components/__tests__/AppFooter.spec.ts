import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppFooter from '../AppFooter.vue'

describe('AppFooter', () => {
  it('renders current year correctly', () => {
    const wrapper = mount(AppFooter);
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(currentYear);
  });

  it('renders the "Invoice" text', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.text()).toContain('Invoice');
  });

  it('has a valid copyright notice', () => {
    const wrapper = mount(AppFooter);
    const currentYear = new Date().getFullYear();
    const copyrightNotice = `Copyright © ${currentYear} · All Rights Reserved`;
    expect(wrapper.text()).toContain(copyrightNotice);
  });

  it('has the correct font and font size', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.classes()).toContain('font-mono');
    expect(wrapper.classes()).toContain('font-normal');
    expect(wrapper.classes()).toContain('text-xs');
  });
});