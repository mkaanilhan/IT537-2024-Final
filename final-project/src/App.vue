<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <router-link to="/" class="flex-shrink-0" @click="resetFilters">
            <span class="text-2xl font-bold text-blue-600">Pokedex</span>
          </router-link>
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <router-link to="/" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium" @click="resetFilters">Home</router-link>
              <router-link to="/about" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</router-link>
              <router-link to="/favorites" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Favorites</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { usePokemonStore } from '@/stores/pokemon'

export default {
  name: 'App',
  setup() {
    const store = usePokemonStore()

    const resetFilters = () => {
      store.resetFilters()
    }

    return {
      resetFilters
    }
  }
}
</script>