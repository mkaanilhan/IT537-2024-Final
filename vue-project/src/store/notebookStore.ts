import { defineStore } from 'pinia';
import type { Word } from '../types';

export const useNotebookStore = defineStore('notebookStore', {
    state: () => ({
        savedWords: JSON.parse(localStorage.getItem('notebook') || '[]') as Word[],
    }),
    actions: {
        saveWord(word: Word) {
            this.savedWords.push(word);
            localStorage.setItem('notebook', JSON.stringify(this.savedWords));
        },
        removeWord(word: Word) {
            this.savedWords = this.savedWords.filter(w => w.word !== word.word);
            localStorage.setItem('notebook', JSON.stringify(this.savedWords));
        },
    },
});
