<template>
  <div class="notebook">
    <h1 class="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">My Word Notebook</h1>
    <div v-if="wordStore.savedWords.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="word in wordStore.savedWords" 
        :key="word.word" 
        class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md relative"
      >
        <div 
          @click="navigateToExplorer(word.word)"
          class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 p-2 rounded"
        >
          <h2 class="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">{{ word.word }}</h2>
          <p v-if="word.phonetic" class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ word.phonetic }}</p>
          <p class="text-gray-700 dark:text-gray-300">
            {{ getShortDefinition(word) }}
          </p>
        </div>
        <button 
          @click="removeWord(word)"
          class="absolute top-2 right-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
          title="Remove word"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <p v-else class="text-gray-600 dark:text-gray-400">Your notebook is empty. Start saving words from the Word of the Day or Explorer!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWordStore } from '@/store/wordStore';
import { useRouter } from 'vue-router';
import type { Word } from '@/types';

export default defineComponent({
  name: 'NotebookPage',
  setup() {
    const wordStore = useWordStore();
    const router = useRouter();

    const getShortDefinition = (word: Word): string => {
      if (word.meanings && word.meanings.length > 0 && word.meanings[0].definitions.length > 0) {
        const definition = word.meanings[0].definitions[0].definition;
        return definition.length > 100 ? definition.substring(0, 97) + '...' : definition;
      }
      return 'No definition available';
    };

    const navigateToExplorer = (word: string) => {
      router.push({ name: 'Explorer', query: { word } });
    };

    const removeWord = (word: Word) => {
      if (confirm(`Are you sure you want to remove "${word.word}" from your notebook?`)) {
        wordStore.removeFromNotebook(word);
      }
    };

    return {
      wordStore,
      getShortDefinition,
      navigateToExplorer,
      removeWord,
    };
  },
});
</script>