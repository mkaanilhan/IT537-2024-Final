<template>
  <div>
    <SearchBar @search="searchAddress" />
    <PreviousSearches :searches="previousSearches" @search="navigateToAddress" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import SearchBar from '@/components/SearchBar.vue';
import PreviousSearches from '@/components/PreviousSearches.vue';

export default {
  components: {
    SearchBar,
    PreviousSearches,
  },
  setup() {
    const router = useRouter();
    const store = useSearchStore();

    const searchAddress = (address) => {
      if (address && address.trim()) {
        store.addSearch(address); // Store the search in Pinia and local storage
        navigateToAddress(address);
      }
    };

    const navigateToAddress = (address) => {
      router.push({ name: 'Account', params: { address } }); // Redirect to the account page
    };

    return {
      previousSearches: store.previousSearches,
      searchAddress,
      navigateToAddress,
    };
  },
};
</script>
