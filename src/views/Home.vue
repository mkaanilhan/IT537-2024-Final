<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MovieList from "../components/MovieList.vue";

export default {
  components: {
    Header,
    Footer,
    MovieList,
  },
};
</script>

<template>
  <div>
    <Header />
    <h1 class="font-bold text-3xl">Upcoming Movies</h1>
    <MovieList />
    <Footer />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
}
</style>
