<template>
  <div id="app" :class="{ 'dark': isDarkMode }" class="min-h-screen flex flex-col">
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col min-h-screen">
      <header class="bg-primary-600 dark:bg-gray-800 text-white p-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold">Wordy</h1>
          <nav class="hidden md:flex space-x-4">
            <router-link to="/" class="hover:text-accent-300 transition duration-300">Home</router-link>
            <router-link to="/explorer" class="hover:text-accent-300 transition duration-300">Explorer</router-link>
            <router-link to="/quiz" class="hover:text-accent-300 transition duration-300">Quiz</router-link>
            <router-link to="/notebook" class="hover:text-accent-300 transition duration-300">Notebook</router-link>
            <button @click="toggleDarkMode" class="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white">
              <span v-if="isDarkMode">🌞</span>
              <span v-else>🌙</span>
            </button>
          </nav>
          <button @click="toggleMenu" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-primary-500 dark:bg-gray-700">
        <router-link to="/" class="block py-2 px-4 text-white hover:bg-primary-600 dark:hover:bg-gray-600" @click="closeMenu">Home</router-link>
        <router-link to="/explorer" class="block py-2 px-4 text-white hover:bg-primary-600 dark:hover:bg-gray-600" @click="closeMenu">Explorer</router-link>
        <router-link to="/quiz" class="block py-2 px-4 text-white hover:bg-primary-600 dark:hover:bg-gray-600" @click="closeMenu">Quiz</router-link>
        <router-link to="/notebook" class="block py-2 px-4 text-white hover:bg-primary-600 dark:hover:bg-gray-600" @click="closeMenu">Notebook</router-link>
        <button @click="toggleDarkMode" class="w-full text-left py-2 px-4 text-white hover:bg-primary-600 dark:hover:bg-gray-600">
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>

      <main class="flex-grow container mx-auto px-4 py-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <footer class="bg-primary-800 dark:bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Word Wizard. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');
    const isMenuOpen = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem('darkMode', isDarkMode.value.toString());
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    watch(isDarkMode, (newValue) => {
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, { immediate: true });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'h':
            event.preventDefault();
            router.push('/');
            break;
          case 'e':
            event.preventDefault();
            router.push('/explorer');
            break;
          case 'q':
            event.preventDefault();
            router.push('/quiz');
            break;
          case 'n':
            event.preventDefault();
            router.push('/notebook');
            break;
          case 'd':
            event.preventDefault();
            toggleDarkMode();
            break;
        }
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown);
    });

    return {
      isDarkMode,
      isMenuOpen,
      toggleDarkMode,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #2d3748;
}

.dark ::-webkit-scrollbar-thumb {
  background: #4a5568;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>