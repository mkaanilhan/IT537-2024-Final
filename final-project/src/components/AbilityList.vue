<template>
    <div class="mt-4">
      <h3 class="text-xl font-semibold mb-2">Abilities</h3>
      <ul class="list-disc list-inside">
        <li v-for="ability in abilities" :key="ability.ability.name" class="capitalize">
          {{ ability.ability.name }}
          <span v-if="ability.is_hidden" class="text-sm text-gray-500">(Hidden)</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      abilities: {
        type: Array,
        required: true
      }
    }
  }
  </script>