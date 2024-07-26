<template>
  <form class="max-w-lg mx-auto bg-white p-4 shadow-md rounded-lg">
    <div class="mb-4">
      <label for="name" class="block text-gray-700">Name</label>
      <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded mt-1">
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded mt-1">
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700">Message</label>
      <textarea id="message" class="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

