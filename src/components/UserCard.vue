<template>
  <div class="bg-white p-4 shadow-md rounded-lg">
    <img :src="user.avatar" alt="User Avatar" class="w-16 h-16 rounded-full mx-auto">
    <h2 class="text-xl font-bold text-center mt-2">{{ user.first_name }} {{ user.last_name }}</h2>
    <p class="text-center text-gray-600">{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object,
  },
}
</script>


  