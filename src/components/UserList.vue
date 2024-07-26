<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import UserCard from './UserCard.vue'
import { useUserStore } from '@/stores/user'

export default {
  name: 'UserList',
  components: { UserCard },
  setup() {
    const userStore = useUserStore()
    const users = ref([])

    onMounted(async () => {
      await userStore.fetchUsers()
      users.value = userStore.users
    })

    return { users }
  },
}
</script>

