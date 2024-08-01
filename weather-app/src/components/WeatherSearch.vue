<template>
  <div class="flex justify-center items-center">
    <input
      v-model="city"
      @keyup.enter="searchWeather"
      type="text"
      placeholder="Şehir adı girin..."
      class="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="searchWeather"
      class="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Ara
    </button>
  </div>
</template>

<script>
import { useWeatherStore } from '@/stores/weatherStore';
import { ref } from 'vue';

export default {
  name: 'WeatherSearch',
  setup() {
    const store = useWeatherStore();
    const city = ref('');

    const searchWeather = () => {
      if (city.value.trim() !== '') {
        store.fetchWeather(city.value.trim());
      }
    };

    return {
      city,
      searchWeather,
    };
  },
};
</script>
