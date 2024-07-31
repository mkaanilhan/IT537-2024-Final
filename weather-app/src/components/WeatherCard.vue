<template>
    <div @click="goToDetails" class="bg-cardBackground shadow-lg p-6 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
      <h2 class="text-xl font-bold mb-2">{{ weather.location.name }}</h2>
      <img :src="weather.current.weather_icons[0]" alt="Weather Icon" class="w-16 h-16 mb-2"/>
      <p class="text-2xl">{{ weather.current.temperature }}°C</p>
      <p class="text-gray-600">{{ weather.current.weather_descriptions[0] }}</p>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'WeatherCard',
    props: {
      weather: Object,
    },
    setup(props) {
      const router = useRouter();
  
      const goToDetails = () => {
        router.push(`/details/${props.weather.location.name}`);
      };
  
      return {
        goToDetails,
      };
    },
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  .transition-transform {
    transition: transform 0.3s;
  }
  </style>
  