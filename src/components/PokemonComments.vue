<template>
    <div class="bg-black text-pink-500 rounded-lg shadow-md p-8 max-w-4xl w-full mx-auto mt-8">
      <h3 class="text-3xl font-bold mb-4">Comments</h3>
  
     
      <div class="mb-6">
        <div v-for="(comment, index) in comments" :key="index" class="border-b border-gray-700 py-2">
          <p class="font-semibold">{{ comment.username }}</p>
          <p>{{ comment.text }}</p>
        </div>
      </div>
  
      
      <form @submit.prevent="addComment" class="flex flex-col gap-4">
        <input v-model="newComment.username" type="text" placeholder="Your name" class="p-2 rounded bg-gray-800 text-pink-500 border border-gray-600 focus:outline-none focus:border-pink-500"/>
        <textarea v-model="newComment.text" rows="4" placeholder="Your comment" class="p-2 rounded bg-gray-800 text-pink-500 border border-gray-600 focus:outline-none focus:border-pink-500"></textarea>
        <button type="submit" class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300">Submit Comment</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    props: {
      comments: {
        type: Array,
        default: () => []
      }
    },
    setup(props, { emit }) {
      const newComment = ref({ username: '', text: '' })
  
      const addComment = () => {
        if (newComment.value.username.trim() && newComment.value.text.trim()) {
          emit('add-comment', { ...newComment.value })
          newComment.value = { username: '', text: '' }
        }
      }
  
      return {
        newComment,
        addComment
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  