<template>
    <div class="mb-4">
      <input v-model="query" @keyup.enter="searchWeather" placeholder="Şehir adı girin..." class="p-2 border rounded-lg w-full" />
      <button @click="searchWeather" class="bg-blue-500 text-white p-2 rounded-lg mt-2 w-full">Ara</button>
    </div>
  </template>
  
  <script>
  import { useWeatherStore } from '@/stores/weatherStore';
  
  export default {
    name: 'WeatherSearch',
    data() {
      return {
        query: '',
      };
    },
    methods: {
      searchWeather() {
        const store = useWeatherStore();
        store.fetchWeather(this.query);
      },
    },
  };
  </script>
  