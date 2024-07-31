<template>
    <div>
      <h3 class="text-2xl font-press-start mb-4">Abilities</h3>
      <ul class="list-disc list-inside">
        <li v-for="ability in abilities" :key="ability.ability.name" class="capitalize mb-2">
          {{ ability.ability.name }}
          <span v-if="ability.is_hidden" class="text-sm text-gray-500 ml-2">(Hidden)</span>
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