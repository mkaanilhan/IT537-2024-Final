<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 flex flex-col">
    <header class="text-white p-4 flex flex-col items-center mb-4">
      <p class="italic text-6xl text-black mb-4">Gotta Catch 'Em All</p>
      <div class="flex flex-wrap justify-center space-x-4 mb-4">
        
        <router-link 
          to="/" 
          class="bg-black text-white hover:bg-gray-800 rounded px-6 py-3 transition-colors cursor-pointer"
        >
          Find a Pokémon
        </router-link>
        <router-link 
          :to="{ name: 'CatchPokemon' }" 
          class="bg-black text-white hover:bg-gray-800 rounded px-6 py-3 transition-colors cursor-pointer"
        >
          Catch a Pokémon
        </router-link>
        <router-link 
          :to="{ name: 'FeedPokemon' }" 
          class="bg-black text-white hover:bg-gray-800 rounded px-6 py-3 transition-colors cursor-pointer"
        >
          Feed a Pokémon
        </router-link>
        <router-link 
          :to="{ name: 'SellPokemon' }" 
          class="bg-black text-white hover:bg-gray-800 rounded px-6 py-3 transition-colors cursor-pointer"
        >
          Sell a Pokémon
        </router-link>
      </div>
     
      <button 
        @click="startFight" 
        class="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-red-900 font-bold rounded-lg px-8 py-4 transition-transform transform hover:scale-105 cursor-pointer animate-rainbow flex items-center"
      >
        <span class="mr-4">Start a Fight</span>
        <span class="text-2xl">🔥</span>
        <span class="absolute inset-0 border-4 border-white rounded-lg opacity-50 animate-pulse"></span>
      </button>
    </header>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    
    <div v-if="message" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 rounded-lg shadow-lg z-50">
      <p :class="messageClass">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const message = ref('')
const messageClass = ref('')
const router = useRouter()

const showMessage = (type) => {
  if (type === 'catch') {
    message.value = '🎉 You\'ve caught a Pokémon! 🎉'
    messageClass.value = 'animate-blink-catch'
  } else if (type === 'feed') {
    message.value = '🍽️ You\'ve fed a Pokémon! 🍽️'
    messageClass.value = 'animate-blink-feed'
  } else if (type === 'completed') {
    message.value = '✅ Task Completed! ✅'
    messageClass.value = 'animate-blink-completed'
  } else if (type === 'fight') {
    message.value = '⚔️ Starting a Fight! ⚔️'
    messageClass.value = 'animate-blink-fight'
  }
  setTimeout(() => {
    message.value = '' 
  }, 3000)
}

const startFight = () => {
  showMessage('fight')
  setTimeout(() => {
    router.push({ name: 'FightPage' })  
  }, 1000) 
}
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
@keyframes blink-catch {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes blink-feed {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes blink-completed {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

@keyframes blink-fight {
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-blink-catch {
  animation: blink-catch 1.5s infinite;
}

.animate-blink-feed {
  animation: blink-feed 1.5s infinite;
}

.animate-blink-completed {
  animation: blink-completed 1.5s infinite;
}

.animate-blink-fight {
  animation: blink-fight 1.5s infinite;
}

.animate-rainbow {
  background-size: 200% 200%;
  animation: rainbow 2s linear infinite;
}
</style>
