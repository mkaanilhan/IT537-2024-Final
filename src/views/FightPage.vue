<template>
  <div class="min-h-screen bg-sky-900 flex flex-col items-center justify-center relative">
    <div class="absolute inset-0 z-[-1] bg-cover bg-center" :style="{ backgroundImage: 'url(\'/images/battle-background.jpg\')' }"></div>
    <div class="flex flex-col lg:flex-row items-center relative z-10">
      
      <div class="flex-1 flex flex-col items-center justify-center p-4 lg:border-r lg:border-gray-700">
        <div class="bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 class="text-5xl font-bold text-white mb-6 text-center">Select Your Pokémon to Fight!</h1>
          <input
            v-model="searchQuery"
            @input="searchPokemon"
            type="text"
            placeholder="Search Pokémon..."
            class="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <ul v-if="filteredPokemons.length" class="list-disc pl-4 text-white">
            <li v-for="pokemon in filteredPokemons" :key="pokemon.name">
              <a href="#" @click.prevent="selectPokemon(pokemon)" class="hover:underline">{{ pokemon.name }}</a>
            </li>
          </ul>
        </div>
      </div>
     
      <div class="flex-1 flex flex-col items-center justify-center p-4">
        <div class="bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div v-if="randomPokemon && selectedPokemon" class="flex justify-between items-center">
            <div class="flex flex-col items-center mr-4">
              <img :src="randomPokemon.image" :alt="randomPokemon.name" class="w-56 h-56 object-cover mb-4 rounded-lg border-4 border-white">
              <p class="text-2xl font-semibold">{{ randomPokemon.name }}</p>
            </div>
            <div class="flex flex-col items-center ml-4">
              <img :src="selectedPokemon.image" :alt="selectedPokemon.name" class="w-56 h-56 object-cover mb-4 rounded-lg border-4 border-white">
              <p class="text-2xl font-semibold">{{ selectedPokemon.name }}</p>
            </div>
          </div>
          <div v-else class="text-center text-gray-300">
            Loading Pokémon...
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center p-4 mt-6">
      <button 
        @click="fight"
        class="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded px-12 py-4 text-2xl font-bold mb-4 transition-all duration-500 transform hover:scale-105 overflow-hidden"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 opacity-30 animate-flame"></span>
        <span class="relative z-10 flex items-center justify-center">
          <span class="mr-2">🔥</span> FIGHT! <span class="ml-2">⚔️</span>
        </span>
      </button>
      <div v-if="fightResult" class="text-3xl font-bold text-white mb-4">
        {{ fightResult }}
      </div>
      <router-link 
        to="/" 
        class="bg-black text-white hover:bg-gray-800 rounded px-6 py-3 transition-colors cursor-pointer text-xl"
      >
        Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const searchQuery = ref('')
const allPokemons = ref([])
const selectedPokemon = ref(null)
const randomPokemon = ref(null)
const fightResult = ref('')

const filteredPokemons = computed(() => {
  if (searchQuery.value) {
    return allPokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  return []
})

const fetchPokemons = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    const data = await response.json()
    allPokemons.value = data.results
  } catch (error) {
    console.error('Error fetching Pokémon list:', error)
  }
}

const fetchRandomPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.results.length)
    const randomPokemonUrl = data.results[randomIndex].url
    const pokemonResponse = await fetch(randomPokemonUrl)
    const pokemonData = await pokemonResponse.json()
    randomPokemon.value = {
      name: pokemonData.name,
      image: pokemonData.sprites.other['official-artwork'].front_default
    }
  } catch (error) {
    console.error('Error fetching random Pokémon:', error)
  }
}

const searchPokemon = () => {
  fightResult.value = ''
}

const selectPokemon = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url)
    const pokemonData = await response.json()
    selectedPokemon.value = {
      name: pokemonData.name,
      image: pokemonData.sprites.other['official-artwork'].front_default
    }
    searchQuery.value = ''
    fightResult.value = ''
    await fetchRandomPokemon()
  } catch (error) {
    console.error('Error fetching selected Pokémon:', error)
  }
}

const fight = () => {
  if (randomPokemon.value && selectedPokemon.value) {
   
    const winner = Math.random() < 0.5 ? selectedPokemon.value.name : randomPokemon.value.name
    fightResult.value = `${winner} kazandı!!`
  } else {
    fightResult.value = 'No Pokémon selected'
  }
}

watch(selectedPokemon, async () => {
  if (selectedPokemon.value) {
    await fetchRandomPokemon()
  }
})

onMounted(() => {
  fetchPokemons()
  fetchRandomPokemon()
})
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}


button {
  font-size: 1.125rem;
}


@keyframes flame {
  0% { transform: translateX(-100%) scaleX(1.2); opacity: 0; }
  50% { transform: translateX(0) scaleX(1); opacity: 1; }
  100% { transform: translateX(100%) scaleX(1.2); opacity: 0; }
}


.bg-sky-900 {
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
}

button {
  position: relative;
  overflow: hidden;
}

button .animate-flame {
  background: radial-gradient(circle, rgba(255, 69, 0, 0.8), rgba(255, 0, 0, 0.8));
  animation: flame 1.5s infinite;
}

button:hover {
  animation: glow 1.5s infinite;
}

@keyframes glow {
  0% { text-shadow: 0 0 5px rgba(255, 69, 0, 0.8), 0 0 10px rgba(255, 69, 0, 0.6); }
  50% { text-shadow: 0 0 10px rgba(255, 69, 0, 1), 0 0 20px rgba(255, 69, 0, 0.8); }
  100% { text-shadow: 0 0 5px rgba(255, 69, 0, 0.8), 0 0 10px rgba(255, 69, 0, 0.6); }
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.lg\:flex-row {
  flex-direction: row;
}

.lg\:border-r {
  border-right-width: 1px;
}

.lg\:border-gray-700 {
  border-color: #4a5568;
}

.w-56 {
  width: 14rem;
}

.h-56 {
  height: 14rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border-4 {
  border-width: 4px;
}

.border-white {
  border-color: #ffffff;
}

.max-w-md {
  max-width: 28rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

li a {
  color: #ffffff;
}

button {
  position: relative;
  overflow: hidden;
}
</style>

















