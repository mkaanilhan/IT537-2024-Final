import { defineStore } from 'pinia';
import apiClient from '@/services/api';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWeather(location) {
      this.loading = true;
      this.error = null;
      try {
        const response = await apiClient.get('/current', {
          params: { query: location },
        });
        this.weatherData = response.data;
      } catch (error) {
        this.error = 'Hava durumu verisi alınamadı';
      } finally {
        this.loading = false;
      }
    },
  },
});
