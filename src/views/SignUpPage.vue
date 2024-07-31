<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, sameAs } from "@vuelidate/validators";
import { computed, reactive, ref, type Ref } from "vue";
import _ from "lodash";
import { message } from "ant-design-vue";
import { registerUser } from "@/service/service";

declare type ErrorMessage = {
  email: string | Ref<string>;
  password: string | Ref<string>;
  passwordConfirm: string | Ref<string>;
};

const state = reactive({
  email: "",
  password: "",
  passwordConfirm: "",
});

const errorMessage: ErrorMessage = reactive({
  email: "",
  password: "",
  passwordConfirm: "",
});

const passwordRef = computed(() => state.password);

const rules = {
  email: {
    required: helpers.withMessage("! Lütfen email adresinizi giriniz", required),
    email: helpers.withMessage("! Geçerli bir email adresi giriniz", email),
  },
  password: {
    required: helpers.withMessage("! Lütfen şifrenizi giriniz", required),
    minLength: helpers.withMessage(
      "! Şifre en az 6 karakter olmalıdır",
      (value: string) => value.length >= 6
    ),
  },
  passwordConfirm: {
    required: helpers.withMessage("! Lütfen şifrenizi giriniz", required),
    sameAs: helpers.withMessage(
      "! Şifreler uyuşmuyor",
      sameAs(passwordRef)
    ),
    minLength: helpers.withMessage(
      "! Şifre en az 6 karakter olmalıdır",
      (value: string) => value.length >= 6
    ),
  },
};

const v$ = useVuelidate(rules, state);

const submit = async () => {
  v$.value.$touch();
  errorMessage.email = "";
  errorMessage.password = "";
  errorMessage.passwordConfirm = "";
  if (v$.value.$error) {
    _.map(v$.value.$silentErrors, (value) => {
      if (value.$property === "email") errorMessage.email = value.$message;
      if (value.$property === "password") errorMessage.password = value.$message;
      if (value.$property === "passwordConfirm") errorMessage.passwordConfirm = value.$message;
    });
    message.error("Lütfen alanları doğru doldurunuz");
    return;
  } else {
    try {
      await registerUser(state.email, state.password);
    } catch (error) {
      console.error("Kayıt işlemi sırasında hata:", error);
      message.error("Kayıt işlemi sırasında bir hata oluştu.");
    }
  }
};
</script>

<template lang="pug">
form(class="flex flex-col w-[300px] m-auto items-center space-y-5 justify-center h-[calc(100vh-130px)]" @submit.prevent="submit")
    input(type="text" placeholder="Email" class="p-3 border w-full focus:outline-none" v-model="state.email")
    span(v-if="errorMessage.email !== ''" class="text-white w-full text-left") {{ errorMessage.email }}
    input(type="password" placeholder="Şifre" class="p-3 border w-full focus:outline-none" v-model="state.password")
    span(v-if="errorMessage.password !== ''" class="text-white w-full text-left") {{ errorMessage.password }}
    input(type="password" placeholder="Şifreyi Onayla" class="p-3 border w-full focus:outline-none" v-model="state.passwordConfirm")
    span(v-if="errorMessage.passwordConfirm !== ''" class="text-white w-full text-left") {{ errorMessage.passwordConfirm }}
    button(type="submit" class="border p-3 w-full bg-black text-white cursor-pointer border-none") Kayıt Ol
    span(class="text-white") Hesabınız var mı? 
      RouterLink(to="/login" class="underline") Giriş Yap
</template>

<style lang=""></style>
