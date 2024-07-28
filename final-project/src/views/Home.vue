<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 bg-grey p-4 rounded-lg shadow">
      <SearchBar v-model="store.searchTerm" class="w-full sm:w-64" />
      <TypeFilter v-model="store.selectedType" class="w-full sm:w-64" />
    </div>
    <PokemonList :pokemons="filteredPokemons" />
    <div class="text-center">
      <button 
        @click="loadMore" 
        class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        :disabled="store.loading"
      >
        {{ store.loading ? 'Loading...' : 'Load More' }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import SearchBar from '@/components/SearchBar.vue'
import TypeFilter from '@/components/TypeFilter.vue'
import PokemonList from '@/components/PokemonList.vue'

export default {
  components: { SearchBar, TypeFilter, PokemonList },
  setup() {
    const store = usePokemonStore()

    const filteredPokemons = computed(() => {
      return store.pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(store.searchTerm.toLowerCase()) &&
        (store.selectedType === '' || pokemon.types.includes(store.selectedType))
      )
    })

    const loadMore = () => {
      store.fetchPokemons()
    }

    onMounted(() => {
      if (store.pokemonList.length === 0) {
        store.fetchPokemons()
      }
    })

    return {
      store,
      filteredPokemons,
      loadMore
    }
  }
}
</script>