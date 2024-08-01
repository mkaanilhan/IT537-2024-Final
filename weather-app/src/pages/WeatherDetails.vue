<template>
  <div class="p-4">
    <div v-if="loading">Yükleniyor...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="weather">
      <WeatherDetails :weather="weather" />
    </div>
  </div>
</template>

<script>
import WeatherDetails from '@/components/WeatherDetails.vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'WeatherDetailsPage',
  components: {
    WeatherDetails,
  },
  setup() {
    const route = useRoute();
    const store = useWeatherStore();
    const weather = computed(() => store.weatherData);
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);

    onMounted(() => {
      const location = route.params.location;
      store.fetchWeather(location);
    });

    return {
      weather,
      loading,
      error,
    };
  },
};
</script>
