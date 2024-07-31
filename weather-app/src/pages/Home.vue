<template>
    <div class="min-h-screen p-4 flex flex-col items-center">
      <div class="container mx-auto">
        <WeatherSearch />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <WeatherCard v-for="weather in weathers" :key="weather.location.name" :weather="weather" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import WeatherSearch from '@/components/WeatherSearch.vue';
  import WeatherCard from '@/components/WeatherCard.vue';
  import { useWeatherStore } from '@/stores/weatherStore';
  
  export default {
    name: 'Home',
    components: {
      WeatherSearch,
      WeatherCard,
    },
    computed: {
      weathers() {
        const store = useWeatherStore();
        return store.weatherData ? [store.weatherData] : [];
      },
    },
  };
  </script>
  