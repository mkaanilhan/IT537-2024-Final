<script setup>
import { useMovieStore } from "../stores/index.js";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const imageUrl = ref("");
const imageUrl_ = computed(() => imageUrl.value);

const movie = ref({});

onMounted(async () => {
  const id = useRoute().params.id;
  const store = useMovieStore();
  await store.fetchMovieDetails(id);
  movie.value = store.movieDetails;
  imageUrl.value =
    "https://image.tmdb.org/t/p/original" + store.movieDetails.poster_path;
});
console.log(imageUrl.value);
</script>

<template>
  <Header />
  <div class="m-auto">
    <div
      class="flex justify-center items-center space-x-6 h-[calc(100vh-112px)]"
    >
      <img class="max-w-[300px]" :src="imageUrl_" alt="" />
      <div class="divide-y divide-gray-400 max-w-[500px]">
        <h1 class="font-bold text-xl">{{ movie.title }}</h1>
        <p
          class="w-full text-left flex flex-col justify-start items-start hover:bg-slate-300"
        >
          <strong> Movie Overwiew: </strong>{{ movie.overview }}
        </p>
        <p
          class="w-full text-center flex flex-col justify-center items-start hover:bg-slate-300"
        >
          <strong> Release Date: </strong>{{ movie.release_date }}
        </p>
        <p
          class="w-full text-center flex flex-col justify-center items-start hover:bg-slate-300"
        >
          <strong> Movie Runtime: </strong>{{ movie.runtime }}
        </p>
        <p
          class="w-full text-center flex flex-col justify-center items-start hover:bg-slate-300"
        >
          <span> <strong> Movie Genres: </strong> </span>
          <span v-for="genre in movie.genres" :key="genre.id">
            - {{ genre.name }}
          </span>
        </p>
        <p></p>
      </div>
    </div>
  </div>
  <Footer />
</template>
