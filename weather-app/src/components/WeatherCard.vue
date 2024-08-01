<template>
  <div @click="goToDetails" class="bg-white shadow-md p-4 rounded-lg mb-4 cursor-pointer">
    <h2 class="text-xl font-bold">{{ weather.location.name }}</h2>
    <p>{{ weather.current.temperature }}°C</p>
    <p>{{ weather.current.weather_descriptions[0] }}</p>
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
</style>
