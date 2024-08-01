<template>
  <div class="bg-background min-h-screen p-4 flex flex-col items-center">
    <div class="container mx-auto">
      <WeatherSearch />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <WeatherCard
          v-for="weather in weathers"
          :key="weather.location.name"
          :weather="weather"
        />
        <div v-if="!loading && weathers.length === 0" class="text-center w-full">Veri bulunamadı</div>
        <div v-if="loading" class="text-center w-full">Yükleniyor...</div>
        <div v-if="error" class="text-center w-full text-red-500">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherSearch from '@/components/WeatherSearch.vue';
import WeatherCard from '@/components/WeatherCard.vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { computed } from 'vue';

export default {
  name: 'Home',
  components: {
    WeatherSearch,
    WeatherCard,
  },
  setup() {
    const store = useWeatherStore();
    const weathers = computed(() => store.weatherData ? [store.weatherData] : []);
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);

    return {
      weathers,
      loading,
      error,
    };
  },
};
</script>
