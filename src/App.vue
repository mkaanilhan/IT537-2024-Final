<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/user";
import "./assets/main.css";
import logo from "@/assets/logo.png";

const appLogo = logo;

const header = ref(null);
const footer = ref(null);
const mainContent = ref(null);

const store = useAuthStore();

onMounted(async () => {
  const headerHeight = header.value.offsetHeight;
  const footerHeight = footer.value.offsetHeight;
  const totalHeight = headerHeight + footerHeight;

  const h = `calc(100vh - ${totalHeight}px)`;
  mainContent.value.style.minHeight = h;
  await store.getUser();
});

const logOutUser = async () => {
  await store.logout();
};

const handleClick = () => {
  window.location.href = "/";
};
</script>

<template lang="pug">

main(class="flex flex-col min-h-[100vh] m-auto justify-between max-w-[1400px] bg-[#FAFAFA] shadow-lg")

  header(class="bg-gray-800  text-white  flex justify-between items-center px-3 md:px-10 sticky z-50 top-0" ref="header")
      div
        img(:src="appLogo" alt="Vue logo" width="70" height="50" class="cursor-pointer" @click="handleClick")
      nav(class="flex space-x-3 max-md:text-sm md:space-x-5") 
          RouterLink(to="/") Home
          RouterLink(to="/create-blog") Write
          RouterLink(v-if="!store.isLoggedIn()"  to="/login") Login
          RouterLink(v-if="store.isLoggedIn()" to="/me") Me
          span(v-if="store.isLoggedIn()" @click="logOutUser" class="cursor-pointer") Log Out
  div(class="p-6 gap-3" ref='mainContent')
      RouterView(class="")
  footer(class="bg-gray-800  text-white flex justify-center items-center p-5 sticky bottom-0 z-50" ref="footer")
      p(class="text-sm") © 2024 bloggApp  - Hakan KARAYILMAZ
  

</template>
