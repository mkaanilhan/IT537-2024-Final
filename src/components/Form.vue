<script setup lang="js">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, sameAs } from "@vuelidate/validators";
import { computed, reactive, ref } from "vue";
import _ from "lodash";
import { message } from "ant-design-vue";

import { useAuthStore } from "@/stores/user";

const { register, login, sendPasswordRestEmail } = useAuthStore();

const { formType } = defineProps({
  formType: {
    type: String,
    required: true,
  },
});

const buttonText =
  formType == "register"
    ? "Register"
    : formType == "login"
      ? "Login"
      : formType == "resetPassword"
        ? "Reset Password"
        : formType == "updatePassword"
          ? "Update Password"
          : "Unknown";

const state = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const errorMessage = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const passwordRef = computed(() => state.password);

const rules = {
  ...(formType == "register" && {
    name: {
      required: helpers.withMessage("! Please enter your name", required),
      minLength: helpers.withMessage(
        "! Name must be at least 3 characters",
        (value) => value.length >= 3
      ),
    },
  }),

  ...(formType !== "updatePassword" && {
    email: {
      required: helpers.withMessage("! Please enter your email", required),
      email: helpers.withMessage("! Please enter a valid email", email),
    },
  }),

  ...(formType !== "resetPassword" && {
    password: {
      required: helpers.withMessage("! Please enter your password", required),
      minLength: helpers.withMessage(
        "! Password must be at least 6 characters",
        (value) => value.length >= 6
      ),
    },
  }),

  ...(formType == "register" && {
    passwordConfirm: {
      required: helpers.withMessage("! Please enter your password", required),
      sameAs: helpers.withMessage(
        "! Passwords do not match",
        sameAs(passwordRef)
      ),
      minLength: helpers.withMessage(
        "! Password must be at least 6 characters",
        (value) => value.length >= 6
      ),
    },
  }),
};

const v$ = useVuelidate(rules, state);

const submit = () => {
  console.log(state);
  console.log("submit");
  v$.value.$touch();
  errorMessage.email = "";
  errorMessage.password = "";
  errorMessage.passwordConfirm = "";
  errorMessage.name = "";
  if (v$.value.$error) {
    _.map(v$.value.$silentErrors, (value, key) => {
      _.keys(value).map((k) => {
        if (value.$property === "email") errorMessage.email = value.$message;
        if (value.$property === "password")
          errorMessage.password = value.$message;
        if (value.$property === "passwordConfirm")
          errorMessage.passwordConfirm = value.$message;
        if (value.$property === "name") errorMessage.name = value.$message;
      });
    });
    message.error("Please fill in the fields correctly");
    return;
  } else {
    if (formType == "register") {
      console.log("register");
      console.log(state.email, state.password);
      register({
        email: state.email,
        password: state.password,
        name: state.name,
      });
    }
    if (formType == "login") {
      console.log("login");
      login({ email: state.email, password: state.password });
    }
    if (formType == "resetPassword") {
      sendPasswordRestEmail(state.email);
    }
  }
};
</script>

<template lang="pug">

form(class="flex flex-col max-md:text-sm w-[330px] m-auto items-center space-y-3 justify-center h-[calc(100vh-130px)]" @submit.prevent="submit")
    input(v-if="formType == 'register'" type="text" placeholder="Name" class="p-3 border w-full focus:outline-none" v-model="state.name")
    span(v-if="errorMessage.name !== '' && formType == 'register'" class="w-full text-sm text-left") {{ errorMessage.name }}
    input(v-if="formType !== 'updatePassword'" type="text" placeholder="Email" class="p-3 border w-full focus:outline-none" v-model="state.email")
    span(v-if="errorMessage.email !== '' && formType !== 'updatePassword'" class="w-full text-sm text-left") {{ errorMessage.email }}
    input( v-if="formType == 'login' || formType == 'register' || formType == 'updatePassword'" type="password" placeholder="Password" class="p-3 border w-full focus:outline-none" v-model="state.password")
    span(v-if="errorMessage.password !== '' && formType !== 'resetPassword'" class="w-full text-sm text-left") {{ errorMessage.password }}
    input(v-if="formType == 'register'" type="password" placeholder="Confirm Password" class="p-3 border w-full focus:outline-none" v-model="state.passwordConfirm")
    span(v-if="errorMessage.passwordConfirm !== '' && formType == 'register'" class="w-full text-sm text-left") {{ errorMessage.passwordConfirm }}
    button(type="submit" class="border p-3 w-full bg-black text-white cursor-pointer border-none")  {{  buttonText }}
    span.j(v-if="formType == 'register'" class="") Already have an account? 
      RouterLink(to="/login" class="underline") Login
    div.j(v-if="formType == 'login'" class="flex flex-col items-center space-y-0")
      span Don't have an account? 
        RouterLink(to="/register" class="underline") Register
      span Forgot Password? 
        RouterLink(to="/reset-password" class="underline") Reset Password
    span.j(v-if="formType == 'resetPassword'" class="") Have you Remember the Password? 
      RouterLink(to="/login" class="underline") Login

</template>

<style scoped>
span:not(.j, .j *) {
  @apply text-xs text-red-800;
}
</style>
