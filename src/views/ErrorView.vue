<template>
    <div class="flex-col container mx-auto px-5 sm:px-20 py-20 flex justify-center">
      <h1 class="text-gray-700 text-6xl text-center"> {{ $t('error.page') }}</h1>
      <p class="text-gray-600 text-8xl text-center mt-8">
        {{ $t('error.404') }}
      </p>
      <router-link
        to="/home"
        class="mt-5 text-xl text-green-600 hover:underline text-center">
        {{ $t('error.back') }}
      </router-link>
    </div>
</template>
