<template>
  <div v-if="pokemon" class="min-h-screen bg-gray-100">
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
      <div class="max-w-7xl mx-auto md:flex items-center">
        <div class="md:flex-shrink-0 mb-4 md:mb-0 md:mr-8 flex justify-center">
          <img :src="pokemon.image" :alt="pokemon.name" class="w-48 h-48 md:w-64 md:h-64 object-contain bg-white rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        </div>
        <div>
          <div class="text-sm font-semibold">#{{ pokemon.id.toString().padStart(3, '0') }}</div>
          <h1 class="text-4xl font-bold capitalize mb-2">{{ pokemon.name }}</h1>
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="type in pokemon.types" 
              :key="type"
              class="px-3 py-1 rounded-full text-sm font-medium"
              :class="getTypeColor(type)"
            >
              {{ type }}
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
    </div>
    
    <div class="max-w-7xl mx-auto p-8">
      <h2 class="text-2xl font-bold mb-4">Stats</h2>
      <div class="space-y-4">
        <div 
          v-for="stat in pokemon.stats" 
          :key="stat.stat.name" 
          class="group"
        >
          <div class="flex items-center mb-1">
            <span class="w-32 text-right pr-4 text-gray-600 capitalize">{{ stat.stat.name }}</span>
            <div class="flex-grow bg-gray-200 rounded-full h-4 overflow-hidden relative">
              <div 
                class="h-full rounded-full transition-all duration-500 ease-out group-hover:animate-pulse"
                :class="getStatColor(stat.stat.name)"
                :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
              ></div>
              <span 
                class="absolute inset-0 flex items-center justify-end pr-2 text-xs font-bold text-black transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                {{ stat.base_stat }}/255
              </span>
            </div>
          </div>
          <div class="text-sm text-gray-500 ml-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ getStatDescription(stat.stat.name) }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto p-8 bg-white">
      <h2 class="text-2xl font-bold mb-4">Abilities</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="ability in pokemon.abilities" :key="ability.ability.name" 
             class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
          <h3 class="font-semibold capitalize mb-2">{{ ability.ability.name }}</h3>
          <p class="text-sm text-gray-600">
            {{ ability.is_hidden ? 'Hidden Ability' : 'Regular Ability' }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto p-8 flex justify-center">
      <button 
        @click="toggleFavorite"
        class="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center"
      >
        <span class="mr-2">{{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}</span>
        <span class="text-2xl">{{ isFavorite ? '❤️' : '🤍' }}</span>
      </button>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center p-8">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p class="text-xl">Loading Pokemon details...</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemon'

export default {
  setup() {
    const route = useRoute()
    const store = usePokemonStore()
    const pokemon = ref(null)

    const isFavorite = computed(() => {
      return store.favorites.includes(pokemon.value?.id)
    })

    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        const data = await response.json()
        pokemon.value = {
          id: data.id,
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          types: data.types.map(type => type.type.name),
          height: data.height,
          weight: data.weight,
          abilities: data.abilities,
          stats: data.stats
        }
      } catch (error) {
        console.error('Error fetching Pokemon details:', error)
      }
    }

    const toggleFavorite = () => {
      if (pokemon.value) {
        store.toggleFavorite(pokemon.value.id)
      }
    }

    const getTypeColor = (type) => {
      const colors = {
        normal: 'bg-gray-400 text-white',
        fire: 'bg-red-500 text-white',
        water: 'bg-blue-500 text-white',
        electric: 'bg-yellow-400 text-black',
        grass: 'bg-green-500 text-white',
        ice: 'bg-blue-200 text-black',
        fighting: 'bg-red-700 text-white',
        poison: 'bg-purple-500 text-white',
        ground: 'bg-yellow-600 text-white',
        flying: 'bg-indigo-400 text-white',
        psychic: 'bg-pink-500 text-white',
        bug: 'bg-green-400 text-white',
        rock: 'bg-yellow-700 text-white',
        ghost: 'bg-purple-700 text-white',
        dragon: 'bg-indigo-700 text-white',
        dark: 'bg-gray-700 text-white',
        steel: 'bg-gray-400 text-white',
        fairy: 'bg-pink-300 text-black'
      }
      return colors[type] || 'bg-gray-500 text-white'
    }

    const getStatColor = (statName) => {
      const colors = {
        hp: 'bg-red-500',
        attack: 'bg-orange-500',
        defense: 'bg-yellow-500',
        'special-attack': 'bg-blue-500',
        'special-defense': 'bg-green-500',
        speed: 'bg-pink-500'
      }
      return colors[statName] || 'bg-gray-500'
    }

    const getStatDescription = (statName) => {
      const descriptions = {
        hp: 'Total health points',
        attack: 'Physical attack strength',
        defense: 'Physical defense strength',
        'special-attack': 'Special attack strength',
        'special-defense': 'Special defense strength',
        speed: 'Speed and evasion'
      }
      return descriptions[statName] || ''
    }

    onMounted(fetchPokemonDetails)

    return { 
      pokemon, 
      isFavorite, 
      toggleFavorite, 
      getTypeColor, 
      getStatColor,
      getStatDescription
    }
  }
}
</script>