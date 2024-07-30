<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <h1>About</h1>
    <p>
      This is an IMDB clone application using Vue.js and the Movies-Verse API.
    </p>
    <Footer />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
}
p {
  text-align: center;
  margin: 1rem;
}
</style>
