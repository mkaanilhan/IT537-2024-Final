<template>
  <div :class="{ 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500': !loading, 'bg-gray-100': loading }" class="min-h-screen flex flex-col items-center justify-center p-4 relative">
  
    <div class="absolute inset-0 z-[-1] bg-cover bg-center" :style="{ backgroundImage: 'url(\'/images/battle-background.jpg\')' }"></div>

 
    <div v-if="loading" class="text-center text-xl font-bold text-white">
      Loading...
    </div>
    
   
    <div v-else-if="pokemon" class="bg-black text-white rounded-lg shadow-md p-8 max-w-4xl w-full mx-auto relative flex flex-col min-h-screen">
     
      <div class="relative text-center mb-4">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name" class="w-full h-96 object-contain mx-auto">
     
        <div v-if="message" class="absolute inset-0 flex items-center justify-center">
          <p :class="messageClass" class="text-pink-600 font-bold text-6xl">
            {{ message }}
          </p>
        </div>
      </div>
      
     
      <div class="bg-black p-4 rounded-lg mb-8">
        <div class="text-center mb-4">
          <h2 class="text-5xl font-bold">{{ pokemon.name }}</h2>
        </div>
      </div>
      
     
      <div class="flex flex-col items-center space-y-4 mb-8">
        <button @click="feedNew" class="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-12 py-6 text-xl rounded-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <span class="absolute inset-0 bg-gradient-to-r from-yellow-500 via-blue-500 to-green-500 opacity-30 animate-flame"></span>
          <span class="relative z-10">Feed New One</span>
        </button>
        <router-link to="/">
          <button class="bg-gray-800 text-white px-12 py-6 text-xl rounded-lg hover:bg-gray-900 transition-colors duration-300">
            Home
          </button>
        </router-link>
      </div>
      
      
      <div v-if="congratulationsMessage" class="text-center mb-8">
        <p class="text-pink-600 text-4xl font-bold">
          {{ congratulationsMessage }}
        </p>
      </div>

      
      <div class="mt-auto">
        <PokemonComments :comments="comments" :pokemonName="pokemon.name" @add-comment="handleAddComment" class="bg-black text-pink-500 rounded-lg shadow-md p-8 max-w-4xl w-full mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PokemonComments from '@/components/PokemonComments.vue'

const router = useRouter()

const pokemon = ref(null)
const loading = ref(true)
const message = ref('')
const messageClass = ref('')
const congratulationsMessage = ref('')
const comments = ref([]) 

onMounted(async () => {
  await fetchPokemon()
})

const fetchPokemon = async () => {
  loading.value = true
  const name = Math.floor(Math.random() * 898 + 1)
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    pokemon.value = await response.json()
    message.value = `🎉 You've fed ${pokemon.value.name}! 🎉`
    messageClass.value = 'animate-blink-completed'
    congratulationsMessage.value = `Congratulations!!! You have fed a new Pokémon: ${pokemon.value.name}`
  } catch (error) {
    console.error('Error fetching Pokemon details:', error)
  } finally {
    loading.value = false
  }
}

const feedNew = () => {
  fetchPokemon()
}


const handleAddComment = (comment) => {
  comments.value.push(comment)
}
</script>

<style scoped>

@keyframes blink-completed {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes flame {
  0% { transform: translateX(-100%) scaleX(1.2); opacity: 0; }
  50% { transform: translateX(0) scaleX(1); opacity: 1; }
  100% { transform: translateX(100%) scaleX(1.2); opacity: 0; }
}

.animate-blink-completed {
  animation: blink-completed 1.5s infinite;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

button {
  position: relative;
  overflow: hidden;
}

button .animate-flame {
  background: radial-gradient(circle, rgba(255, 69, 0, 0.8), rgba(255, 0, 0, 0.8));
  animation: flame 1.5s infinite;
}
</style>

  
  
  
  
  
  
  
  