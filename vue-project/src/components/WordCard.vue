<template>
  <div class="word-card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4 transform transition duration-500 hover:scale-105">
    <LoadingSpinner v-if="loading" />
    <template v-else>
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-primary-600 dark:text-primary-400">{{ word.word }}</h2>
          <p v-if="word.phonetic" class="text-gray-600 dark:text-gray-400 mb-2">{{ word.phonetic }}</p>
        </div>
        <button 
          @click="toggleSave" 
          class="px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
          :class="isSaved 
            ? 'bg-success-500 text-green dark:bg-success-600 dark:text-white' 
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
        >
          {{ isSaved ? 'Saved' : 'Save' }}
        </button>
      </div>
      <div v-for="(meaning, index) in word.meanings" :key="index" class="mt-4">
        <h3 class="text-lg font-semibold text-secondary-600 dark:text-secondary-400">{{ meaning.partOfSpeech }}</h3>
        <ol class="list-decimal list-inside">
          <li v-for="(definition, defIndex) in meaning.definitions.slice(0, 2)" :key="defIndex" class="mt-2">
            <p class="inline text-gray-800 dark:text-gray-200">{{ definition.definition }}</p>
            <p v-if="definition.example" class="text-gray-600 dark:text-gray-400 italic mt-1">"{{ definition.example }}"</p>
          </li>
        </ol>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';
import { useWordStore } from '@/store/wordStore';
import type { Word } from '@/types';
import LoadingSpinner from '@/LoadingSpinner.vue';

export default defineComponent({
  name: 'WordCard',
  components: {
    LoadingSpinner,
  },
  props: {
    word: {
      type: Object as PropType<Word>,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const wordStore = useWordStore();

    const isSaved = computed(() => 
      wordStore.savedWords.some(saved => saved.word === props.word.word)
    );

    const toggleSave = () => {
      if (isSaved.value) {
        wordStore.removeFromNotebook(props.word);
      } else {
        wordStore.saveToNotebook(props.word);
      }
    };

    return {
      isSaved,
      toggleSave,
    };
  },
});
</script>