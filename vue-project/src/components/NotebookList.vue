<template>
  <div class="notebook-list">
    <h2 class="text-2xl font-bold mb-4">My Notebook</h2>
    <ul v-if="wordStore.savedWords.length > 0">
      <li v-for="word in wordStore.savedWords" :key="word.word" class="mb-4">
        <WordCard :word="word" />
        <button @click="removeWord(word)" class="mt-2 bg-red-500 text-white px-4 py-2 rounded">
          Remove
        </button>
      </li>
    </ul>
    <p v-else>Your notebook is empty. Start saving words!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWordStore } from '@/store/wordStore';
import WordCard from './WordCard.vue';
import type { Word } from '@/types';

export default defineComponent({
  name: 'NotebookList',
  components: {
    WordCard,
  },
  setup() {
    const wordStore = useWordStore();

    const removeWord = (word: Word) => {
      wordStore.removeFromNotebook(word);
    };

    return {
      wordStore,
      removeWord,
    };
  },
});
</script>