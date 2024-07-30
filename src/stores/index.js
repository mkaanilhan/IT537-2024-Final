import { createPinia, defineStore } from "pinia";
import { createApp } from "vue";
import App from "../App.vue";
import { list } from "postcss";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
    movieDetails: {},
  }),

  actions: {
    async fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEzMjlmZjA3MWUyN2EzMDM0ZWRlMmFhMzRhMGRjZSIsIm5iZiI6MTcyMjE5Mzg0My4zOTM5NzIsInN1YiI6IjY2YTY5NjJhYjUxMGM5OWJiMjcyMjg4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zNpTafCCm-N6Y2mp-NodF502mSJqfZRoUHQnQllag5A",
        },
      };

      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          options
        );
        const data = await res.json();
        this.movies = data.results;
      } catch (e) {
        console.error(e);
      }
    },

    async fetchMovieDetails(id) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEzMjlmZjA3MWUyN2EzMDM0ZWRlMmFhMzRhMGRjZSIsIm5iZiI6MTcyMjE5Mzg0My4zOTM5NzIsInN1YiI6IjY2YTY5NjJhYjUxMGM5OWJiMjcyMjg4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zNpTafCCm-N6Y2mp-NodF502mSJqfZRoUHQnQllag5A",
        },
      };

      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/" + id,
          options
        );
        const data = await res.json();
        this.movieDetails = data;
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
