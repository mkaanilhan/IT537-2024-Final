<script setup>
import { required, email, helpers, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import router from "@/router";
import { computed, reactive, ref } from "vue";
import { databaseService } from "@/services/DatabaseService";
import _ from "lodash";
import { useAuthStore } from "@/stores/user";
const { create } = databaseService();

const store = useAuthStore();

const state = reactive({
  header: "",
  title: "",
  para: "",
});

const errorMessage = reactive({
  header: "",
  title: "",
  para: "",
});

const rules = {
  header: {
    required: helpers.withMessage("! Please enter your header", required),
    minLength: helpers.withMessage(
      "! Header must be at least 10 characters",
      (value) => value.length >= 15
    ),
  },
  title: {
    required: helpers.withMessage("! Please enter your title", required),
    minLength: helpers.withMessage(
      "! Title must be at least 20 characters",
      (value) => value.length >= 20
    ),
  },
  para: {
    required: helpers.withMessage("! Please enter your para", required),
    minLength: helpers.withMessage(
      "! Para must be at least 100 characters",
      (value) => value.length >= 100
    ),
  },
};

const v$ = useVuelidate(rules, state);

const submit = async () => {
  v$.value.$touch();
  errorMessage.header = "";
  errorMessage.para = "";
  errorMessage.title = "";

  if (v$.value.$error) {
    _.map(v$.value.$silentErrors, (value, key) => {
      _.keys(value).map((k) => {
        if (value.$property === "header") errorMessage.header = value.$message;
        if (value.$property === "para") errorMessage.para = value.$message;
        if (value.$property === "title") errorMessage.title = value.$message;
      });
    });
    message.error("Please fill in the fields correctly");
    return;
  } else {
    await create("blog", { ...state, author_id: store.user.id });
    router.push("/me");
  }
};
</script>

<template lang="pug">

form(@submit.prevent="submit")
    h1.u1 Write a Blog
    div
        label Header :
        input.form-item(v-model="state.header")
        span(v-if="errorMessage.header") {{ errorMessage.header }}
    div
        label Title :
        input.form-item(v-model="state.title")
        span(v-if="errorMessage.title") {{ errorMessage.title }}
    div
        label Para :
        textarea.form-item(v-model="state.para" rows="15")
        span(v-if="errorMessage.para") {{ errorMessage.para }}
    button(type="submit") Register
</template>

<style scoped>
form {
  @apply flex flex-col space-y-2 md:space-y-4  max-md:text-sm;
}
.form-item {
  @apply flex flex-col space-y-2 w-[90%] p-1;
}
div {
  @apply flex flex-col space-y-1;
}
span {
  @apply text-xs text-red-800;
}
button {
  @apply border w-[90%] px-4 py-2 bg-gray-800 text-white;
}
</style>
