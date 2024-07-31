// stores/PokemonStore.js
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    loadingMore: false,
    offset: 0,
  }),
  actions: {
    async fetchPokemons() {
      this.loadingMore = true
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.offset}`)
        const data = await response.json()

        const newPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const details = await res.json()
            return {
              name: pokemon.name,
              image: details.sprites.other['official-artwork'].front_default
            }
          })
        )

        this.pokemonList = [...this.pokemonList, ...newPokemon]
        this.offset += 20
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      } finally {
        this.loadingMore = false
      }
    },
    async getRandomPokemon() {
      if (this.pokemonList.length === 0) {
        await this.fetchPokemons()
      }
      const randomIndex = Math.floor(Math.random() * this.pokemonList.length)
      return this.pokemonList[randomIndex]
    }
  }
})
