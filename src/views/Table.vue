<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Kullanıcı Listesi</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-200">ID</th>
            <th class="py-2 px-4 bg-gray-200">Name</th>
            <th class="py-2 px-4 bg-gray-200">Email</th>
            <th class="py-2 px-4 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="border py-2 px-4">{{ user.id }}</td>
            <td class="border py-2 px-4">{{ user.first_name }} {{ user.last_name }}</td>
            <td class="border py-2 px-4">{{ user.email }}</td>
            <td class="border py-2 px-4">
              <button @click="deleteUser(user.id)" class="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

export default {
  name: 'Table',
  setup() {
    const userStore = useUserStore()
    const users = ref([])

    onMounted(async () => {
      await userStore.fetchUsers()
      users.value = userStore.users
    })

    const deleteUser = async (id) => {
      await userStore.deleteUser(id)
      users.value = userStore.users
    }

    return {
      users,
      deleteUser
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>

  