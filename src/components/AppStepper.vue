<template>
    <div class="wrapper-stepper">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress "></div>
            </div>

            <div class="stepper-item" :class="{ 'current': props.step === item, 'success': props.step > item }" v-for="item in props.totalStep" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success" src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
                    <span class="number">
                        {{ item }}
                    </span>
                </div>
                <span class="stepper-item-title">
                    Step {{ item }}
                </span>
            </div>
        </div>

        <div class="stepper-content">
            <div class="stepper-panel">
                <slot></slot>
            </div>
        </div>
        <div class="controls">
          <slot name="footer"></slot>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';
  
const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
  totalStep: {
    type: Number,
  }
});

const stepperProgress = computed((): string => {
  return ( 100 / 3 ) * ( props.step - 1 ) + '%'
});

</script>
  
<style lang="scss" scoped>
$default:#C5C5C5;
$green-1:#75CC65;
$transiton:all 500ms ease;

body {
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}


.wrapper-stepper{
  background-color: #fff;
  padding: 60px;
  border-radius: 32px;
  box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 660px;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;

  &-progress{
    position: absolute;
    background-color: $default;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;

    &-bar{
        position: absolute;
        left: 0;
        height: 100%;
        width: 0%;
        background-color: $green-1;
        transition: $transiton;
    }
  }
}

.stepper-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $default;
  transition: $transiton;

  &-counter{
    height: 68px;
    width: 68px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid $default;
    position: relative;

    .icon-success{
      position: absolute;
      opacity: 0;
      transform: scale(0);
      width: 24px;
      transition: $transiton;
    }

    .number{
      font-size: 22px;
      transition: $transiton;
    }
  }

  &-title{
    position: absolute;
    font-size: 14px;
    bottom: -24px;
  }
}

.stepper-item.success {
  .stepper-item-counter{
    border-color: $green-1;
    background-color: #c8ebc1;
    color: #fff;
    font-weight: 600;
    .icon-success{
        opacity: 1;
        transform: scale(1);
    }

    .number{
        opacity: 0;
        transform: scale(0);
    }
  }

  .stepper-item-title{
    color: $green-1;
  }
}

.stepper-item.current{
  .stepper-item-counter{
      border-color: $green-1;
      background-color: $green-1;
      color: #fff;
      font-weight: 600;
  }

  .stepper-item-title{
      color: #818181;
  }
}

.stepper-panel{
  color: #333;
  text-align: center;
  height: 400px;
  box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
  margin: 40px 0;
}

.controls{
  display: flex;
}

@media (max-width: 700px) {
  .stepper {
    width: 410px;
  }
}
@media (max-width: 400px) {
  .stepper {
    width: 340px;
  }
  .stepper-content {
    width: 340px;
  }
}
</style>