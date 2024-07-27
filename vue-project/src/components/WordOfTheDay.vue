<template>
  <div class="word-of-the-day">
    <h2 class="text-2xl font-bold mb-4">Word of the Day</h2>
    <div v-if="wordStore.loading">Loading...</div>
    <div v-else-if="wordStore.error">{{ wordStore.error }}</div>
    <div v-else-if="wordStore.currentWord">
      <WordCard :word="wordStore.currentWord" />
      <button @click="saveWord" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save to Notebook
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useWordStore } from '@/store/wordStore';
import WordCard from './WordCard.vue';

export default defineComponent({
  name: 'WordOfTheDay',
  components: {
    WordCard,
  },
  setup() {
    const wordStore = useWordStore();

    onMounted(() => {
      wordStore.fetchWordOfTheDay();
    });

    const saveWord = () => {
      if (wordStore.currentWord) {
        wordStore.saveToNotebook(wordStore.currentWord);
      }
    };

    return {
      wordStore,
      saveWord,
    };
  },
});
</script>