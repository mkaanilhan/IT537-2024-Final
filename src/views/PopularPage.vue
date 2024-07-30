<template>
  <div>
    <h1>Popular Anime</h1>
    <div v-if="popularAnimes.length">
      <div v-for="anime in popularAnimes" :key="anime.mal_id" class="anime-card">
        <h2>{{ anime.title }}</h2>
        <p>{{ anime.synopsis }}</p>
        <img :src="anime.images.jpg.image_url" alt="Anime Image">
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
      popularAnimes: []
    };
  },
  created() {
    this.fetchPopularAnimes();
  },
  methods: {
    async fetchPopularAnimes() {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        this.popularAnimes = response.data.data;
      } catch (error) {
        console.error('Error fetching popular animes:', error);
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
  background-color: #f9f9f9;
}

.anime-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

p {
  text-align: justify;
}
</style>