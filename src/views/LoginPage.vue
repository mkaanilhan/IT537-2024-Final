<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { reactive, ref, type Ref } from "vue";
import _ from "lodash";
import { message } from "ant-design-vue";
import { loginUser } from "@/service/service";
import router from "@/router";

declare type ErrorMessage = {
  email: string | Ref<string>;
  password: string | Ref<string>;
};

const state = reactive({
  email: "",
  password: "",
});

const errorMessage: ErrorMessage = reactive({
  email: "",
  password: "",
});

const rules = {
  email: {
    required: helpers.withMessage("! Lütfen email adresinizi giriniz", required),
    email: helpers.withMessage("! Geçerli bir email adresi giriniz", email),
  },
  password: {
    required: helpers.withMessage("! Lütfen şifrenizi giriniz", required),
  },
};

const v$ = useVuelidate(rules, state);

const submit = async () => {
  v$.value.$touch();
  errorMessage.email = "";
  errorMessage.password = "";
  if (v$.value.$error) {
    _.map(v$.value.$silentErrors, (value) => {
      if (value.$property === "email") errorMessage.email = value.$message;
      if (value.$property === "password") errorMessage.password = value.$message;
    });
    message.error("Lütfen alanları doğru doldurunuz");
    return;
  }

  await loginUser(state.email, state.password);
};
</script>

<template lang="pug">
form(class="flex flex-col w-[300px] m-auto items-center space-y-5 justify-center h-[calc(100vh-130px)]" @submit.prevent="submit")
    input(type="text" placeholder="Email" class="p-3 border w-full focus:outline-none" v-model="state.email")
    span(v-if="errorMessage.email !== ''" class="text-red-500 w-full text-left") {{ errorMessage.email }}
    input(type="password" placeholder="Şifre" class="p-3 border w-full focus:outline-none" v-model="state.password")
    span(v-if="errorMessage.password !== ''" class="text-red-500 w-full text-left") {{ errorMessage.password }}
    button(type="submit" class="border p-3 w-full bg-black text-white cursor-pointer border-none") Giriş Yap
    span(class="text-gray-700") Hesabınız yok mu? 
      RouterLink(to="/signup" class="underline") Kayıt Ol
</template>

<style scoped></style>
