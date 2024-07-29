<template>
  <div v-if="anime">
    <h1>{{ anime.title }}</h1>
    <img :src="anime.images.jpg.image_url" alt="Anime Image">
    <p>{{ anime.synopsis }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      anime: null
    };
  },
  created() {
    this.fetchAnimeDetails();
  },
  methods: {
    async fetchAnimeDetails() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        this.anime = response.data.data;
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    }
  }
};
</script>

<style>
img {
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
