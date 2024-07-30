<script>
export default {
  props: {
    movie: Object,
  },
  data() {
    return {
      imageUrl: "",
    };
  },

  mounted() {
    this.imageUrl = "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
  },
};
</script>

<template>
  <router-link :to="'/movie/' + movie.id">
    <div class="flex flex-col justify-center items-center max-w-[200px]">
      <img :src="imageUrl" :alt="original_title" />
      <h3 class="border border-gray-400 w-full text-center">
        {{ movie.original_title }}
      </h3>
    </div>
  </router-link>
</template>

<style scoped>
.movie-item {
  margin: 1rem;
  text-align: center;
}
img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
</style>
