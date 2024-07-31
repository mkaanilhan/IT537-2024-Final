<template>
  <div>
    <h1>Search Anime</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for anime..."
      @input="searchAnimes"
    />
    <div v-if="searchResults.length">
      <div v-for="anime in searchResults" :key="anime.mal_id" class="anime-card">
        <h2>
          <router-link :to="{ name: 'AnimeDetails', params: { id: anime.mal_id } }">{{ anime.title }}</router-link>
        </h2>
        <p>{{ anime.synopsis }}</p>
        <img :src="anime.images.jpg.image_url" alt="Anime Image" />
      </div>
    </div>
    <div v-else>
      <p>No results found or loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: []
    };
  },
  methods: {
    async searchAnimes() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${this.searchQuery}`
        );
        this.searchResults = response.data.data;
      } catch (error) {
        console.error('Error searching animes:', error);
      }
    }
  }
};
</script>

<style>
.anime-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.anime-card img {
  max-width: 100%;
  height: auto;
}
</style>
