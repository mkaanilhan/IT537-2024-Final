<template>
  <div class="bg-danger-100 dark:bg-danger-900 border-l-4 border-danger-500 text-danger-700 dark:text-danger-300 p-4 mb-4" role="alert">
    <p class="font-bold">Error</p>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});
</script>