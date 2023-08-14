import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppStepper from '@/components/AppStepper.vue';

describe('AppStepper', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(AppStepper, {
      props: {
        step: 1,
        totalStep: 3,
      },
    });

    expect(wrapper.find('.wrapper-stepper').exists()).toBe(true);
    expect(wrapper.findAll('.stepper-item').length).toBe(3);
  });

  it('applies current and success classes based on step', () => {
    const wrapper = mount(AppStepper, {
      props: {
        step: 2,
        totalStep: 4,
      },
    });

    const stepperItems = wrapper.findAll('.stepper-item');
    expect(stepperItems[0].classes()).toContain('success');
    expect(stepperItems[1].classes()).toContain('current');
  });
});