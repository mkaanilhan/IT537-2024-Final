<template>
  <div class="quiz-question">
    <h3 class="text-xl font-bold mb-2">{{ question.word }}</h3>
    <ul>
      <li v-for="(option, index) in question.options" :key="index" class="mb-2">
        <button
          @click="selectAnswer(option)"
          class="w-full text-left p-2 border rounded hover:bg-gray-100"
          :class="{ 'bg-green-200': showResult && option === question.correctAnswer,
                    'bg-red-200': showResult && option === selectedAnswer && option !== question.correctAnswer }"
        >
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import type { QuizQuestion } from '@/types';

export default defineComponent({
  name: 'QuizQuestion',
  props: {
    question: {
      type: Object as PropType<QuizQuestion>,
      required: true,
    },
  },
  emits: ['answer'],
  setup(props, { emit }) {
    const showResult = ref(false);
    const selectedAnswer = ref('');

    const selectAnswer = (answer: string) => {
      selectedAnswer.value = answer;
      showResult.value = true;
      emit('answer', answer === props.question.correctAnswer);
    };

    return {
      showResult,
      selectedAnswer,
      selectAnswer,
    };
  },
});
</script>