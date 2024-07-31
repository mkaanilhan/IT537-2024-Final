
<template>
  <div :class="{ 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500': !loading, 'bg-gray-100': loading }" class="min-h-screen flex flex-col items-center justify-center p-4 relative">
    
    <div v-if="loading" class="text-center text-xl font-bold">
      Loading...
    </div>
    
   
    <div v-else-if="pokemon" class="bg-black text-white rounded-lg shadow-md p-8 max-w-4xl w-full mx-auto font-roboto">
      
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

    
    <div v-if="message" class="absolute inset-0 flex items-center justify-center text-center z-10">
      <p :class="messageClass" class="italic text-pink-600 font-bold text-[60px]">
        {{ message }}
      </p>
    </div>

   
    <PokemonComments :comments="comments" @add-comment="handleAddComment" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PokemonAbilities from '@/components/PokemonAbilities.vue'
import PokemonStats from '@/components/PokemonStats.vue'
import PokemonComments from '@/components/PokemonComments.vue'

export default {
  components: {
    PokemonAbilities,
    PokemonStats,
    PokemonComments
  },
  setup() {
    const route = useRoute()
    const pokemon = ref(null)
    const loading = ref(true)
    const message = ref('')
    const messageClass = ref('')
    const comments = ref([])

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

   
    const showMessage = (type) => {
      if (type === 'catch') {
        message.value = `🎉 You've caught ${pokemon.value.name}! 🎉`
        messageClass.value = 'animate-blink-catch'
      } else if (type === 'feed') {
        message.value = '🎉 You have fed a Pokémon! 🎉'
        messageClass.value = 'animate-blink-feed'
      }
      setTimeout(() => {
        message.value = ''  
      }, 5000)
    }

    
    const handleAddComment = (comment) => {
      comments.value.push(comment)
    }

    return {
      pokemon,
      loading,
      message,
      messageClass,
      showMessage,
      comments,
      handleAddComment
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


.animate-blink-catch {
  animation: blink-catch 1.5s infinite;
}

.animate-blink-feed {
  animation: blink-feed 1.5s infinite;
}
</style>

