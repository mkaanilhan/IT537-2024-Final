<template>
    <div class="mt-4">
      <h3 class="text-xl font-semibold mb-2">Stats</h3>
      <div v-for="stat in stats" :key="stat.stat.name" class="mb-2">
        <div class="flex justify-between items-center">
          <span class="capitalize">{{ stat.stat.name }}</span>
          <span class="font-semibold">{{ stat.base_stat }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            class="bg-blue-600 h-2.5 rounded-full" 
            :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stats: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  