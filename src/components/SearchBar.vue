<template>
  <div class="flex flex-col sm:flex-row justify-center mt-4">
    <input
        v-model="searchInput"
        type="text"
        placeholder="Enter Ethereum address"
        class="flex-grow p-2 border border-gray-300 rounded-md sm:rounded-r-none sm:rounded-l-md focus:outline-none"
        @keyup.enter="onSearch"
    />
    <button
        @click="onSearch"
        class="mt-2 sm:mt-0 sm:ml-2 p-2 bg-blue-500 text-white rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    onSearch() {
      if (this.searchInput.trim()) {
        this.$emit('search', this.searchInput);
        this.searchInput = '';
      }
    },
  },
};
</script>
