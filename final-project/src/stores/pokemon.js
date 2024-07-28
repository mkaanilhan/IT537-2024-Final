import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    loading: false,
    offset: 0,
    limit: 20,
    favorites: [],
    searchTerm: '',
    selectedType: ''
  }),
  actions: {
    async fetchPokemons() {
      if (this.loading) return

      this.loading = true
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
        const data = await response.json()
        
        const newPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const details = await res.json()
            return {
              id: details.id,
              name: pokemon.name,
              image: details.sprites.other['official-artwork'].front_default,
              types: details.types.map(type => type.type.name)
            }
          })
        )
        
        this.pokemonList = [...this.pokemonList, ...newPokemon]
        this.offset += this.limit
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      } finally {
        this.loading = false
      }
    },
    toggleFavorite(pokemonId) {
      const index = this.favorites.indexOf(pokemonId)
      if (index === -1) {
        this.favorites.push(pokemonId)
      } else {
        this.favorites.splice(index, 1)
      }
    },
    isFavorite(pokemonId) {
      return this.favorites.includes(pokemonId)
    },
    resetFilters() {
      this.searchTerm = ''
      this.selectedType = ''
    },
    resetPokemonList() {
      this.pokemonList = []
      this.offset = 0
      this.resetFilters()
    }
  }
})