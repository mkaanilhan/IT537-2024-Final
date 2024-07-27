<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative w-24 h-24">
      <div class="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
      <div class="absolute top-0 left-0 w-full h-full border-4 border-primary-500 rounded-full animate-spin-slow"></div>
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <svg class="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      </div>
    </div>
    <p class="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">Please Wait While Preparing Your Quiz!<br> <br> It might take some time!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuizLoadingAnimation'
});
</script>

<style scoped>
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>