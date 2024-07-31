<template>
    <div class="search-bar">
      <input
        v-model="searchQuery"
        @keyup.enter="onSearch"
        type="text"
        placeholder="Search"
        class="search-input"
      />
      <button @click="onSearch" class="search-button">Search</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const searchQuery = ref('');
      const router = useRouter();
  
      const onSearch = () => {
        if (searchQuery.value.trim() !== '') {
          router.push({ path: '/search', query: { q: searchQuery.value } });
        }
      };
  
      return {
        searchQuery,
        onSearch,
      };
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
  }
  
  .search-input::placeholder {
    color: #aaa;
  }
  
  .search-button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  </style>
  