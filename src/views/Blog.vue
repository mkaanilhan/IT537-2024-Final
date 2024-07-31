<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { databaseService } from "@/services/DatabaseService";
import _ from "lodash";

const route = useRoute();
const id = route.params.id;

const { readRowWithJoin } = databaseService();

const blog = ref(null);

onMounted(() => {
  console.log("de");
  readRowWithJoin("blog", ["users"], parseInt(id)).then((data) => {
    console.log(data);
    blog.value = data;
  });
});
</script>

<template lang="pug">


div(v-if="blogs !== null" class="max-w-[700px] m-auto")
    
    div(class="flex flex-col items-end justify-center space-x-3")
            p(class="capitalize") {{ blog?.users.username  }}
            p(class="text-red-800 text-xs") {{ (blog?.created_at)?.split("T")[0] }}
    h1(class="my-3 text-red-800 text-2xl border-b") {{ blog?.header }}
    p(class="my-2 text-blue-500") {{ blog?.title }}
    p {{ blog?.para }}
div(v-else class="text-xl") Loading...
    
    



</template>

<style scoped></style>
