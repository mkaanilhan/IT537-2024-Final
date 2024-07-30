<template>
  <div class="anime-details">
    <h1>{{ anime.title }}</h1>
    <p>{{ anime.synopsis }}</p>
    <img v-if="anime.images && anime.images.jpg" :src="anime.images.jpg.image_url" alt="Anime Image">
    <ul>
      <li>Type: {{ anime.type }}</li>
      <li>Episodes: {{ anime.episodes }}</li>
      <li>Score: {{ anime.score }}</li>
      <li>Members: {{ anime.members }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      anime: {}
    };
  },
  created() {
    this.fetchAnimeDetails();
  },
  methods: {
    async fetchAnimeDetails() {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${this.$route.params.id}`);
        this.anime = response.data.data;
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    }
  }
};
</script>

<style scoped>
.anime-details {
  padding: 20px;
}

.anime-details h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.anime-details img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.anime-details ul {
  list-style-type: none;
  padding: 0;
}

.anime-details ul li {
  margin-bottom: 5px;
}

.anime-details {
  padding-bottom: 80px; 
}

</style>
