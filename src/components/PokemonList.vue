<template>
  <div class="min-h-screen bg-gray-200 p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="bg-white p-4 rounded-lg shadow-md">
        <div class="text-center">
          <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name" class="w-full h-48 object-contain mx-auto">
          <h2 class="text-xl font-bold mt-2">{{ pokemon.name }}</h2>
        </div>
        <PokemonComments :comments="pokemonComments[pokemon.id]" @add-comment="handleAddComment(pokemon.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import PokemonComments from '@/components/PokemonComments.vue'

export default {
  components: {
    PokemonComments
  },
  setup() {
    const pokemons = ref([])
    const pokemonComments = ref({})

    onMounted(async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        const data = await response.json()
        pokemons.value = await Promise.all(data.results.map(async (pokemon) => {
          const pokemonData = await fetch(pokemon.url)
          return await pokemonData.json()
        }))
        
        pokemons.value.forEach(pokemon => {
          pokemonComments.value[pokemon.id] = []
        })
      } catch (error) {
        console.error('Error fetching Pokémon list:', error)
      }
    })

    const handleAddComment = (pokemonId, comment) => {
      if (comment.username.trim() && comment.text.trim()) {
        pokemonComments.value[pokemonId].push(comment)
      }
    }

    return {
      pokemons,
      pokemonComments,
      handleAddComment
    }
  }
}
</script>

<style scoped>
.bg-gray-200 {
  background-color: #f0f0f0;
}

.bg-white {
  background-color: #ffffff;
}
</style>

  