<template>
    <div>
      <h3 class="text-2xl font-press-start mb-4">Stats</h3>
      <div v-for="stat in stats" :key="stat.stat.name" class="mb-4">
        <div class="flex justify-between items-center mb-1">
          <span class="capitalize font-semibold flex items-center">
            <span class="w-8 inline-block font-press-start text-sm mr-2">{{ getStatAbbr(stat.stat.name) }}</span>
            {{ stat.stat.name }}
          </span>
          <span class="font-bold">{{ stat.base_stat }}/255</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div :class="['bg-gradient-to-r', getStatColor(stat.stat.name)]"
               class="h-3 rounded-full transition-all duration-500 ease-out"
               :style="{ width: `${(stat.base_stat / 255) * 100}%` }">
          </div>
        </div>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        Highest base stat: {{ highestBaseStat }}/255
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      stats: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      const getStatColor = (statName) => {
        const colors = {
          hp: 'from-red-500 to-red-600',
          attack: 'from-orange-500 to-orange-600',
          defense: 'from-yellow-500 to-yellow-600',
          'special-attack': 'from-blue-500 to-blue-600',
          'special-defense': 'from-green-500 to-green-600',
          speed: 'from-pink-500 to-pink-600'
        };
        return colors[statName.toLowerCase()] || 'from-gray-500 to-gray-600';
      };
  
      const getStatAbbr = (statName) => {
        const abbrs = {
          hp: 'HP',
          attack: 'ATK',
          defense: 'DEF',
          'special-attack': 'SpA',
          'special-defense': 'SpD',
          speed: 'SPD'
        };
        return abbrs[statName.toLowerCase()] || statName.substring(0, 3).toUpperCase();
      };
  
      const highestBaseStat = computed(() => {
        return Math.max(...props.stats.map(stat => stat.base_stat));
      });
  
      return {
        getStatColor,
        getStatAbbr,
        highestBaseStat
      };
    }
  }
  </script>