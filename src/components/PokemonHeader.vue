<template>
    <div class="flex flex-col md:flex-row items-center md:items-start mb-8">
      <img :src="pokemonImage" :alt="pokemon.name" class="w-64 h-64 object-contain mb-4 md:mb-0 md:mr-8">
      <div class="text-center md:text-left">
        <h2 class="text-4xl font-press-start capitalize mb-2">{{ pokemon.name }}</h2>
        <p class="text-2xl text-gray-600 mb-4 font-press-start">#{{ pokemon.id.toString().padStart(3, '0') }}</p>
        <div class="flex justify-center md:justify-start gap-2 mb-4">
          <span v-for="type in pokemon.types" :key="type.type.name" 
                class="px-4 py-1 rounded-full text-white text-sm font-semibold"
                :class="getTypeColor(type.type.name)">
            {{ type.type.name }}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold">Height</p>
            <p>{{ (pokemon.height / 10).toFixed(1) }} m</p>
          </div>
          <div>
            <p class="font-semibold">Weight</p>
            <p>{{ (pokemon.weight / 10).toFixed(1) }} kg</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const pokemonImage = computed(() => props.pokemon.sprites.other['official-artwork'].front_default);
  
      const getTypeColor = (type) => {
        const colors = {
          normal: 'bg-gray-400',
          fire: 'bg-red-500',
          water: 'bg-blue-500',
          electric: 'bg-yellow-400',
          grass: 'bg-green-500',
          ice: 'bg-blue-200',
          fighting: 'bg-red-700',
          poison: 'bg-purple-500',
          ground: 'bg-yellow-600',
          flying: 'bg-indigo-400',
          psychic: 'bg-pink-500',
          bug: 'bg-green-400',
          rock: 'bg-yellow-700',
          ghost: 'bg-purple-700',
          dragon: 'bg-indigo-700',
          dark: 'bg-gray-700',
          steel: 'bg-gray-400',
          fairy: 'bg-pink-300'
        };
        return colors[type] || 'bg-gray-500';
      };
  
      return {
        pokemonImage,
        getTypeColor
      };
    }
  }
  </script>