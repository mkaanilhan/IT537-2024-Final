<template>
  <div class="quiz">
    <h1 class="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">Vocabulary Quiz</h1>
    <div v-if="isLoading" class="my-8">
      <QuizLoadingAnimation />
    </div>
    <div v-else-if="currentQuestion" class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <div class="mb-4 flex items-center justify-between">
        <div class="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}
        </div>
        <div class="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            class="bg-primary-600 dark:bg-primary-400 h-2.5 rounded-full"
            :style="{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }"
          ></div>
        </div>
      </div>
      <h2 class="text-2xl font-bold mb-4 text-secondary-600 dark:text-secondary-400">{{ currentQuestion.word }}</h2>
      <ul class="space-y-4">
        <li v-for="(option, index) in currentQuestion.options" :key="index">
          <button 
            @click="checkAnswer(option)"
            class="w-full text-left p-4 border rounded-lg transition duration-300"
            :class="getButtonClass(option)"
          >
            {{ option }}
          </button>
        </li>
      </ul>
      <div v-if="showResult" class="mt-4 text-center">
        <p v-if="isCorrect" class="text-success-500 dark:text-success-400 font-bold">Correct!</p>
        <p v-else class="text-danger-500 dark:text-danger-400 font-bold">Incorrect. The correct answer is: {{ currentQuestion.correctAnswer }}</p>
        <button @click="nextQuestion" class="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition duration-300">
          Next Question
        </button>
      </div>
    </div>
    <div v-else-if="quizCompleted" class="text-center">
      <h2 class="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Quiz Completed!</h2>
      <p class="text-xl mb-4">Your score: {{ score }} / {{ totalQuestions }}</p>
      <button @click="startNewQuiz" class="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition duration-300">
        Start New Quiz
      </button>
    </div>
    <div v-else class="text-center">
      <button @click="startNewQuiz" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition duration-300">
        Start Quiz
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import axios from 'axios';
import QuizLoadingAnimation from '@/components/QuizLoadingAnimation.vue';

interface QuizQuestion {
  word: string;
  correctAnswer: string;
  options: string[];
}

export default defineComponent({
  name: 'QuizPage',
  components: {
    QuizLoadingAnimation,
  },
  setup() {
    const questions = ref<QuizQuestion[]>([]);
    const currentQuestionIndex = ref(0);
    const score = ref(0);
    const quizCompleted = ref(false);
    const showResult = ref(false);
    const isCorrect = ref(false);
    const isLoading = ref(false);

    const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
    const totalQuestions = computed(() => questions.value.length);

    const fetchWordDefinition = async (word: string): Promise<string | null> => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const definition = response.data[0].meanings[0].definitions[0].definition;
        return definition;
      } catch (error) {
        console.error(`Error fetching definition for ${word}:`, error);
        return null;
      }
    };

    const generateUniqueOptions = (correctAnswer: string, allDefinitions: string[]): string[] => {
      const options = [correctAnswer];
      const availableDefinitions = allDefinitions.filter(def => def !== correctAnswer);
      
      while (options.length < 4 && availableDefinitions.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableDefinitions.length);
        options.push(availableDefinitions[randomIndex]);
        availableDefinitions.splice(randomIndex, 1);
      }

      return shuffleArray(options);
    };

    const startNewQuiz = async () => {
      isLoading.value = true;
      questions.value = [];
      currentQuestionIndex.value = 0;
      score.value = 0;
      quizCompleted.value = false;
      showResult.value = false;

      try {
        const wordsResponse = await axios.get('https://random-word-api.herokuapp.com/word?number=20');
        const words = wordsResponse.data;

        const allDefinitions: string[] = [];
        for (const word of words) {
          const definition = await fetchWordDefinition(word);
          if (definition) {
            allDefinitions.push(definition);
            questions.value.push({
              word,
              correctAnswer: definition,
              options: [], // We'll fill this later
            });
          }
          if (questions.value.length === 5) break; // Stop after getting 5 valid questions
        }

        // Now generate options for each question
        questions.value = questions.value.map(q => ({
          ...q,
          options: generateUniqueOptions(q.correctAnswer, allDefinitions),
        }));

      } catch (error) {
        console.error('Error generating quiz:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const checkAnswer = (selectedAnswer: string) => {
      showResult.value = true;
      isCorrect.value = selectedAnswer === currentQuestion.value.correctAnswer;
      if (isCorrect.value) {
        score.value++;
      }
    };

    const nextQuestion = () => {
      showResult.value = false;
      currentQuestionIndex.value++;
      if (currentQuestionIndex.value >= questions.value.length) {
        quizCompleted.value = true;
      }
    };

    const shuffleArray = <T>(array: T[]): T[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const getButtonClass = (option: string) => {
      if (!showResult.value) {
        return 'hover:bg-gray-100 dark:hover:bg-gray-700';
      }
      if (option === currentQuestion.value.correctAnswer) {
        return 'bg-success-100 dark:bg-success-900 text-success-700 dark:text-success-300';
      }
      if (option !== currentQuestion.value.correctAnswer && !isCorrect.value) {
        return 'bg-danger-100 dark:bg-danger-900 text-danger-700 dark:text-danger-300';
      }
      return '';
    };

    return {
      currentQuestion,
      currentQuestionIndex,
      totalQuestions,
      quizCompleted,
      score,
      showResult,
      isCorrect,
      isLoading,
      startNewQuiz,
      checkAnswer,
      nextQuestion,
      getButtonClass,
    };
  },
});
</script>