<template>
  <div>
    <h1>Anime List</h1>
    <div v-if="animes.length">
      <div v-for="anime in animes" :key="anime.mal_id" class="anime-card">
        <h2>
          <router-link :to="{ name: 'AnimeDetails', params: { id: anime.mal_id } }">{{ anime.title }}</router-link>
        </h2>
        <p>{{ anime.synopsis }}</p>
        <img :src="anime.images.jpg.image_url" alt="Anime Image" />
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animes: []
    };
  },
  created() {
    this.fetchAnimes();
  },
  methods: {
    async fetchAnimes() {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        this.animes = response.data.data;
      } catch (error) {
        console.error('Error fetching animes:', error);
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
