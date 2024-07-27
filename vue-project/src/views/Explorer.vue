<template>
  <div class="explorer">
    <h1 class="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">Word Explorer</h1>
    <SearchBar @search="searchWord" :initialWord="initialWord" />
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2 text-secondary-600 dark:text-secondary-400">Recent Searches</h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="term in recentSearches"
          :key="term"
          @click="searchWord(term)"
          class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          {{ term }}
        </button>
      </div>
    </div>
    <LoadingSpinner v-if="wordStore.loading" class="mt-4" />
    <ErrorMessage v-else-if="wordStore.error" :message="wordStore.error" class="mt-4" />
    <WordCard v-else-if="wordStore.currentWord" :word="wordStore.currentWord" class="mt-6" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWordStore } from '@/store/wordStore';
import WordCard from '@/components/WordCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import LoadingSpinner from '@/LoadingSpinner.vue';
import ErrorMessage from '@/ErrorMessage.vue';

export default defineComponent({
  name: 'ExplorerPage',
  components: {
    WordCard,
    SearchBar,
    LoadingSpinner,
    ErrorMessage,
  },
  setup() {
    const wordStore = useWordStore();
    const route = useRoute();
    const recentSearches = ref<string[]>([]);
    const initialWord = ref('');

    const searchWord = (word: string) => {
      wordStore.fetchWordDetails(word);
      if (!recentSearches.value.includes(word)) {
        recentSearches.value.unshift(word);
        if (recentSearches.value.length > 5) {
          recentSearches.value.pop();
        }
      }
    };

    onMounted(() => {
      const queryWord = route.query.word as string;
      if (queryWord) {
        initialWord.value = queryWord;
        searchWord(queryWord);
      }
    });

    return {
      wordStore,
      recentSearches,
      searchWord,
      initialWord,
    };
  },
});
</script>