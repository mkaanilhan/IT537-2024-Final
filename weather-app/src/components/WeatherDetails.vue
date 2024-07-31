<template>
    <div>
      <h2 class="text-xl font-bold">{{ weather.location.name }}</h2>
      <img :src="weather.current.weather_icons[0]" alt="Weather Icon" class="w-16 h-16 mb-2"/>
      <p class="text-2xl">{{ weather.current.temperature }}°C</p>
      <p class="text-gray-600">{{ weather.current.weather_descriptions[0] }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherDetails',
    props: {
      weather: Object,
    },
  };
  </script>
  