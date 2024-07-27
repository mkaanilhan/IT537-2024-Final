<template>
  <div class="flex justify-center items-center">
    <div class="animate-bounce bg-primary-500 dark:bg-primary-400 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoadingAnimation'
});
</script>