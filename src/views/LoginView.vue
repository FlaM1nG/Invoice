<template>
  <div class="container-login100">
  <div class="wrap-login">
    <div class="flex justify-center text-sm py-4 title-login">Sign In</div>
    <div class="flex justify-center">
      <GoogleLogin :callback="callback">
        <AppButton>
          <span class="text-black">Login</span>
        </AppButton>
      </GoogleLogin>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import type { CallbackTypes } from "vue3-google-login";
import { useRouter } from 'vue-router';
import AppButton from "@/components/AppButton.vue";

const router = useRouter();

const callback: CallbackTypes.CodeResponseCallback = (response) => {
  console.log("Authorisation code", response)
  // Save in the Local Storage the code
  sessionStorage.setItem('authCode', response.code)
  router.push({ name: 'home' })
};
</script>

<style scoped>
.container-login100 {
  width: 100%;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
}

.wrap-login {
    height: 125px;
    width: 270px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
}

.title-login {
    font-family: Poppins-Bold;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
}
</style>