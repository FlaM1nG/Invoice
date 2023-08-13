<template>
  <div class="container-loading" />
</template>
  
<style scoped>
.container-loading {
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgb(20 195 20 / 50%);
  border-right-color: rgb(130 255 130 / 80%);
  border-bottom-color: rgb(130 255 130 / 80%);
  border-radius: 50%;
  animation: rotate 600ms infinite linear;
}

@keyframes rotate {
  to {
    transform: rotate(1turn)
  }
}
</style>