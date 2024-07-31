<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { databaseService } from "@/services/DatabaseService";
import router from "@/router";

const { remove } = databaseService();

const {
  blog,
  delete: isDelete,
  blogs,
  changeState,
} = defineProps({
  blog: Object,
  delete: Boolean,
  blogs: Array,
  changeState: Function,
});
const url = `/blog/${blog.id}`;

const handleDelete = async (id) => {
  remove("blog", id);
  router.push("/me");

  const newBlogs = blogs.filter((b) => b.id !== id);
  changeState(newBlogs);
};

const c = ref("");

if (isDelete) {
  c.value = "flex items-center space-x-2 md:space-x-4";
}
</script>

<template lang="pug">
div(v-if="delete" :class="c")
  RouterLink(:to='url' class="w-full" )
      div(class="w-full relative max-md:text-sm grid grid-cols-[80px_auto] shadow-xl bg-slate-100 hover:bg-slate-200 cursor-pointer p-2 md:p-5 rounded-lg")
          p.label Author :
          div(class="flex justify-between")
              p(class="capitalize") {{ blog.users.username }}
              p(class="text-red-800 text-xs") {{ (blog.created_at).split("T")[0] }}
          p.label Header : 
          p {{ blog.header }}
          p.label Title  : 
          p {{ blog.title }}
  span(v-if="delete" class="flex justify-center items-center text-xs   text-white  cursor-pointer rounded-full bg-slate-500 w-8 h-8" @click="handleDelete(blog.id)") X
RouterLink(v-else :to='url' class="w-full" )
      div(class="w-full relative max-md:text-sm grid grid-cols-[80px_auto] shadow-xl bg-slate-100 hover:bg-slate-200 cursor-pointer p-2 md:p-5 rounded-lg")
          p.label Author :
          div(class="flex justify-between")
              p {{ blog.users.username }}
              p(class="text-red-800 text-xs") {{ (blog.created_at).split("T")[0] }}
          p.label Header : 
          p {{ blog.header }}
          p.label Title  : 
          p {{ blog.title }}

</template>

<style scoped>
.label {
  @apply font-bold;
}
</style>
