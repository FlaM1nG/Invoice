<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="props.width" 
    :height="props.height" 
    :viewBox="viewBoxFinal"
    :aria-labelledby="props.iconName" 
    role="presentation"
  >
    <title :id="props.iconName" lang="en">{{props.iconName}} icon</title>
    <g :fill="props.iconColor">
      <slot />
    </g>
  </svg>
</template>
  
<script setup lang="ts">

import { computed } from 'vue';

const props = defineProps({
  iconName: {
    type: String,
    default: 'box'
  },
  width: {
    type: [Number, String],
    default: 20
  },
  height: {
    type: [Number, String],
    default: 20
  },
  iconColor: {  
    type: String,
    default: 'currentColor'
  }
});

const viewBoxFinal = computed((): string => {
  return `0 0 ${props.width} ${props.height}`;
});
</script>
  
<style scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
  }
</style>