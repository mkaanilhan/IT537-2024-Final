<template>
  <div v-if="anime">
    <h1>{{ anime.title }}</h1>
    <p>{{ anime.synopsis }}</p>
    <img :src="anime.images.jpg.image_url" alt="Anime Image" />
    <p>Type: {{ anime.type }}</p>
    <p>Episodes: {{ anime.episodes }}</p>
    <p>Score: {{ anime.score }}</p>
    <p>Members: {{ anime.members }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
p {
  margin-bottom: 0.5em;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1em;
}
</style>
