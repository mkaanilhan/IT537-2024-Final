import { defineStore } from 'pinia';
import axios from 'axios';
import type { Word } from '@/types';

export const useWordStore = defineStore('word', {
    state: () => ({
        currentWord: null as Word | null,
        loading: false,
        error: null as string | null,
        savedWords: [] as Word[]
    }),
    actions: {
        async fetchWordOfTheDay() {
            this.loading = true;
            this.error = null;
            try {
                // Simulating a delay to show the loading animation (remove in production)
                await new Promise(resolve => setTimeout(resolve, 1500));

                await this.fetchRandomWord();
            } catch (error) {
                this.error = 'Failed to fetch word of the day';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchRandomWord() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('https://random-word-api.herokuapp.com/word');
                const randomWord = response.data[0];
                await this.fetchWordDetails(randomWord);
            } catch (error) {
                this.error = 'Failed to fetch a random word';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchWordDetails(word: string) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                this.currentWord = response.data[0];
            } catch (error) {
                this.error = 'Failed to fetch word details';
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        saveToNotebook(word: Word) {
            if (!this.savedWords.some(saved => saved.word === word.word)) {
                this.savedWords.push(word);
                this.saveToLocalStorage();
            }
        },
        removeFromNotebook(word: Word) {
            this.savedWords = this.savedWords.filter(saved => saved.word !== word.word);
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('savedWords', JSON.stringify(this.savedWords));
        },
        loadFromLocalStorage() {
            const saved = localStorage.getItem('savedWords');
            if (saved) {
                this.savedWords = JSON.parse(saved);
            }
        },
        clearError() {
            this.error = null;
        }
    },
    getters: {
        isWordSaved: (state) => (word: string) => {
            return state.savedWords.some(saved => saved.word === word);
        }
    }
});