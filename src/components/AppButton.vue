<template>
    <button 
        :disabled="props.isDisabled"
        :class="[props.isDisabled ? 'cursor-not-allowed': 'cursor-pointer', bgColorText ? bgColorText : 'bg-transparent']" 
        class="btn"
        @click="buttonClick"
        >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  bgColorText: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['custom-click'])

const buttonClick = () => {
    emit('custom-click')
  }

</script>

<style lang="scss">
$green-1: #75CC65;
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border-color: #f0f0f0;

    &:disabled{
      opacity: 0.5;
    }

    &--green{
      background-color: $green-1;
      border-color: $green-1;
      color: #fff;
      &-1 {
      background-color: $green-1;
      border-color: $green-1;
      color: #fff;
        margin-left: auto;
      }
    }
}
</style>