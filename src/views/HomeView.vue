<template>
  <main class="min-h-screen text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient">
    <div class="p-10">
     
      <div class="relative mb-8 flex flex-col items-center">
        <input 
          v-model="searchTerm" 
          @input="updateSuggestions" 
          type="text" 
          placeholder="Search Pokémon..." 
          class="w-full max-w-md p-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-blue-500"
        />
        <button 
          @click="searchPokemon" 
          class="mt-4 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors duration-300"
        >
          Search
        </button>
       
        <ul v-if="suggestions.length > 0" class="absolute bg-gray-900 border border-gray-700 rounded-lg mt-2 w-full max-w-md">
          <li 
            v-for="suggestion in suggestions" 
            :key="suggestion.name" 
            @click="selectSuggestion(suggestion.name)"
            class="p-4 cursor-pointer hover:bg-gray-800"
          >
            {{ suggestion.name }}
          </li>
        </ul>
      </div>

     
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div 
          v-for="pokemon in filteredPokemonList" 
          :key="pokemon.name" 
          class="border border-gray-700 rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300 bg-gray-900 flex flex-col items-center"
          @click="goToPokemonDetail(pokemon.name)"
        >
          <img :src="pokemon.image" :alt="pokemon.name" class="w-40 h-40 object-cover">
          <div class="p-6 flex-grow flex items-center justify-center">
            <p class="text-center capitalize font-bold text-3xl">{{ pokemon.name }}</p>
          </div>
        </div>

        
        <div v-if="loadingMore" v-for="i in 50" :key="`loading-${i}`" class="bg-gray-800 rounded-lg shadow-2xl p-6 flex flex-col items-center animate-pulse">
          <div class="w-40 h-40 bg-gray-700 rounded-t-lg"></div>
          <div class="h-6 bg-gray-700 rounded mt-2 w-3/4 mx-auto"></div>
        </div>
      </div>

      
      <div class="text-center mt-8">
        <button 
          @click="loadMore" 
          class="bg-blue-700 text-white px-8 py-4 rounded hover:bg-blue-800 transition-colors duration-300"
          :disabled="loadingMore"
        >
          {{ loadingMore ? 'Loading...' : 'Load More' }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const pokemonList = ref([]);
    const loadingMore = ref(false);
    const offset = ref(0);
    const searchTerm = ref('');
    const suggestions = ref([]);
    const allPokemonList = ref([]); 

  
    const fetchPokemons = async () => {
      loadingMore.value = true;
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset.value}`);
        const data = await response.json();
        
        const newPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: pokemon.name,
              image: details.sprites.other['official-artwork'].front_default
            };
          })
        );
        
        pokemonList.value = [...pokemonList.value, ...newPokemon];
        allPokemonList.value = [...allPokemonList.value, ...newPokemon]; 
        offset.value += 20;
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      } finally {
        loadingMore.value = false;
      }
    };

    
    const loadMore = () => {
      fetchPokemons();
    };

    
    const goToPokemonDetail = (name) => {
      router.push({ name: 'PokemonDetails', params: { name } });
    };

    
    const filteredPokemonList = computed(() => {
      const term = searchTerm.value.toLowerCase();
      return pokemonList.value.filter(pokemon =>
        pokemon.name.toLowerCase().includes(term)
      );
    });

   
    const updateSuggestions = () => {
      const term = searchTerm.value.toLowerCase();
      if (term) {
        suggestions.value = allPokemonList.value.filter(pokemon =>
          pokemon.name.toLowerCase().includes(term)
        );
      } else {
        suggestions.value = [];
      }
    };

    
    const selectSuggestion = (name) => {
      searchTerm.value = name;
      suggestions.value = [];
      searchPokemon();
    };

   
    const searchPokemon = () => {
      if (searchTerm.value) {
        const foundPokemon = pokemonList.value.find(pokemon =>
          pokemon.name.toLowerCase() === searchTerm.value.toLowerCase()
        );
        if (foundPokemon) {
          goToPokemonDetail(foundPokemon.name);
        } else {
          alert('Pokémon not found!');
        }
      }
    };

    onMounted(() => {
      fetchPokemons();
    });

    return {
      pokemonList,
      loadingMore,
      loadMore,
      goToPokemonDetail,
      searchTerm,
      suggestions,
      filteredPokemonList,
      updateSuggestions,
      selectSuggestion,
      searchPokemon
    };
  }
}
</script>

<style scoped>

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>


