<template>
  <div class="search-bar">
    <input
      v-model="searchTerm"
      @keyup.enter="search"
      type="text"
      placeholder="Enter a word"
      class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
    />
    <button @click="search" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    initialWord: {
      type: String,
      default: '',
    },
  },
  emits: ['search'],
  setup(props, { emit }) {
    const searchTerm = ref(props.initialWord);

    const search = () => {
      if (searchTerm.value.trim()) {
        emit('search', searchTerm.value.trim());
      }
    };

    watch(() => props.initialWord, (newValue) => {
      searchTerm.value = newValue;
    });

    return {
      searchTerm,
      search,
    };
  },
});
</script>