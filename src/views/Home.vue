<script setup>
import { databaseService } from "@/services/DatabaseService";
import { ref, onMounted } from "vue";
import BlogCard from "@/components/BlogCard.vue";

const { readAll, readAllWithJoin } = databaseService();

const blogs = ref([]);

onMounted(() => {
  readAllWithJoin("blog", ["users"]).then((data) => {
    blogs.value = data;
  });
});
</script>

<template lang="pug">

div(v-if="blogs.length > 0" class="")
    h1.u1(class="mb-5") Latest Blogs
    div(class="flex flex-col space-y-4")
      BlogCard(v-for="blog in blogs" :key="blog.id" :blog="blog")
div(v-else class="text-xl") Loading...
    
  
</template>

<style lang=""></style>
