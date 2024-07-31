<script setup>
import { databaseService } from "@/services/DatabaseService";
import { ref, onMounted } from "vue";
import BlogCard from "@/components/BlogCard.vue";
import { useAuthStore } from "@/stores/user";

const { readAllWithWhereWithJoin, remove } = databaseService();
const store = useAuthStore();

const blogs = ref([]);

const loading = ref(false);

onMounted(() => {
  loading.value = true;
  readAllWithWhereWithJoin("blog", ["users"], {
    key: "author_id",
    value: store.user.id,
  })
    .then((data) => {
      console.log(data);
      blogs.value = data;
    })
    .finally(() => {
      loading.value = false;
    });
});

const changeState = (value) => {
  blogs.value = value;
};
</script>

<template lang="pug">

div(v-if="!loading && blogs.length > 0" class="")
    h1.u1(class="mb-5") My Blogs
    div(class="flex flex-col space-y-4")
      BlogCard(v-for="blog in blogs" :key="blog.id" :blog="blog" delete="true" :blogs="blogs"  :changeState="changeState")
div(v-if="!loading && blogs.length == 0" class="text-md") There is no  yours blog yet. You can Create "Write Blog" from the menu.
div(v-if="loading" class="text-md") Loading...
    
  
</template>

<style lang=""></style>
