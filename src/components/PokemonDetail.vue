<template>
  <div :class="{ 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500': !loading, 'bg-gray-100': loading }" class="min-h-screen flex flex-col items-center justify-center p-4 relative">
    <div v-if="loading" class="text-center text-xl font-bold">
      Loading...
    </div>
    <div v-else-if="pokemon" class="bg-black text-white rounded-lg shadow-md p-8 max-w-4xl w-full mx-auto font-roboto relative">
    
      <div class="text-center mb-4">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name" class="w-full h-96 object-contain mx-auto">
      </div>
      
      <div class="bg-black p-4 rounded-lg">
        <div class="text-center mb-4">
          <h2 class="text-5xl font-bold">{{ pokemon.name }}</h2>
        </div>
        <div class="flex flex-col gap-8 mt-4">
          <PokemonAbilities :abilities="pokemon.abilities" />
          <PokemonStats :stats="pokemon.stats" />
        </div>
      </div>
    </div>

    <div v-if="pokemon" class="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center z-10">
      <p class="italic text-pink-600 font-bold text-[100px] animate-blink">
        🎉 You've caught <span class="capitalize">{{ pokemon.name }}</span>! 🎉
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PokemonAbilities from '@/components/PokemonAbilities.vue'
import PokemonStats from '@/components/PokemonStats.vue'

export default {
  components: {
    PokemonAbilities,
    PokemonStats
  },
  setup() {
    const route = useRoute()
    const pokemon = ref(null)
    const loading = ref(true)

    onMounted(async () => {
      const name = route.params.name || Math.floor(Math.random() * 898 + 1); 
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        pokemon.value = await response.json()
      } catch (error) {
        console.error('Error fetching Pokemon details:', error)
      } finally {
        loading.value = false
      }
    })

    return {
      pokemon,
      loading
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-blink {
  animation: blink 1.5s infinite;
}
</style>

