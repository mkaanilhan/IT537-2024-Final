<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="proceedLogin" class="form__group field">
      <div class="mb-4">
        <input 
          type="text" 
          v-model="userName" 
          required 
          autocomplete="off" 
          class="input-text w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <input 
          type="password" 
          v-model="password" 
          required 
          autocomplete="off" 
          class="input-text w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  name: 'Login',
  setup() {
    const userName = ref('')
    const password = ref('')
    const router = useRouter()
    const toast = useToast()

    const proceedLogin = () => {
      if (validate()) {
        fetch(`http://localhost:3004/users?userName=${userName.value}`)
          .then((res) => res.json())
          .then((users) => {
            const user = users[0]
            if (user && user.password === password.value) {
              toast.success('Welcome Back ' + userName.value + '!')
              sessionStorage.setItem('username', userName.value)
              sessionStorage.setItem('isAdmin', user.isAdmin)
              router.push('/table')
            } else {
              toast.warning('Username or password error!')
            }
          })
          .catch((err) => {
            toast.error('Login Failed: ' + err.message)
          })
      }
    }

    const validate = () => {
      let result = true
      if (userName.value === '' || userName.value === null) {
        result = false
        toast.warning('Please Enter Username')
      }
      if (password.value === '' || password.value === null) {
        result = false
        toast.warning('Please Enter Password')
      }
      return result
    }

    return {
      userName,
      password,
      proceedLogin
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
