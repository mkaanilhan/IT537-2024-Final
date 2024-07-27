<template>
  <div class="home">
    <h1 class="text-5xl font-bold mb-10 text-primary-600 dark:text-primary-400 text-center font-permanent-marker">
      Word of the Day
    </h1>
    <div v-if="isLoading" class="my-8">
      <div class="text-4xl font-bold text-center text-primary-600 dark:text-primary-400 h-16">
        {{ displayedWord }}
      </div>
      <LoadingAnimation />
    </div>
    <template v-else>
      <WordCard v-if="wordOfTheDay" :word="wordOfTheDay" />
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4" role="alert">
        <p class="font-bold">Error</p>
        <p>{{ error }}</p>
      </div>
    </template>
    <div class="text-center mt-6">
      <button @click="fetchNewWord" class="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition duration-300">
        Get A New Word
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
import WordCard from '@/components/WordCard.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
import type { Word } from '@/types';

export default defineComponent({
  name: 'HomePage',
  components: {
    WordCard,
    LoadingAnimation,
  },
  setup() {
    const isLoading = ref(false);
    const displayedWord = ref('');
    const wordOfTheDay = ref<Word | null>(null);
    const error = ref<string | null>(null);

    const fetchRandomWords = async (count: number): Promise<string[]> => {
      try {
        const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${count}`);
        return response.data;
      } catch (err) {
        console.error('Error fetching random words:', err);
        throw new Error('Failed to fetch random words');
      }
    };

    const fetchWordDetails = async (word: string): Promise<Word | null> => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return response.data[0];
      } catch (err) {
        console.error(`No definition found for word: ${word}`);
        return null;
      }
    };

    const shuffleWords = async (words: string[]) => {
      for (let i = 0; i < words.length * 2; i++) {
        displayedWord.value = words[Math.floor(Math.random() * words.length)];
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    const fetchNewWord = async () => {
      isLoading.value = true;
      error.value = null;
      wordOfTheDay.value = null;

      try {
        let validWordFound = false;
        let attempts = 0;
        const maxAttempts = 5;

        while (!validWordFound && attempts < maxAttempts) {
          const randomWords = await fetchRandomWords(10);
          await shuffleWords(randomWords);

          for (const word of randomWords) {
            displayedWord.value = word;
            const wordDetails = await fetchWordDetails(word);
            if (wordDetails) {
              wordOfTheDay.value = wordDetails;
              validWordFound = true;
              break;
            }
          }

          attempts++;
        }

        if (!validWordFound) {
          throw new Error('Unable to find a valid word after multiple attempts');
        }
      } catch (err) {
        error.value = err instanceof Error ? err.message : 'An unexpected error occurred';
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchNewWord();
    });

    return {
      isLoading,
      displayedWord,
      wordOfTheDay,
      error,
      fetchNewWord,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.font-permanent-marker {
  font-family: 'Permanent Marker', cursive;
}
</style>