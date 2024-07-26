<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Add User</h2>
    <form @submit.prevent="createUser" class="form__group field">
      <div class="mb-4">
        <input type="text" v-model="firstName" required autocomplete="off" class="input-text w-full" placeholder="First Name"/>
      </div>
      <div class="mb-4">
        <input type="text" v-model="lastName" required autocomplete="off" class="input-text w-full" placeholder="Last Name"/>
      </div>
      <div class="mb-4">
        <input type="email" v-model="email" required autocomplete="off" class="input-text w-full" placeholder="Email"/>
      </div>
      <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">Add User</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useToast } from 'vue-toastification'

export default {
  name: 'Form',
  setup() {
    const userStore = useUserStore()
    const toast = useToast()

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')

    const createUser = async () => {
      await userStore.createUser({ first_name: firstName.value, last_name: lastName.value, email: email.value })
      toast.success('User created successfully!')
      firstName.value = ''
      lastName.value = ''
      email.value = ''
    }

    return {
      firstName,
      lastName,
      email,
      createUser
    }
  }
}
</script>

<style scoped>
.input-text {
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
