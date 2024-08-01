import { defineStore } from 'pinia';
import axios from 'axios';

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
      this.weatherData = null; // Her yeni aramada önceki verileri temizleyelim
      try {
        const response = await axios.get('http://api.weatherstack.com/current', {
          params: {
            access_key: 'afc2bc603e5c0db72da0ed930c459c1a',
            query: location,
          },
        });
        console.log('API Response:', response.data); // Yanıtı konsola yazdır
        if (response.data && response.data.location) {
          this.weatherData = response.data;
        } else {
          this.error = 'Geçersiz hava durumu verisi alındı';
        }
      } catch (error) {
        console.error('API Error:', error); // Hata varsa konsola yazdır
        this.error = 'Hava durumu verisi alınamadı';
      } finally {
        this.loading = false;
      }
    },
  },
});
