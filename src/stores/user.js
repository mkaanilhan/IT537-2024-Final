import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    user: null
  }),
  actions: {
    async fetchUsers() {
      const response = await fetch('https://reqres.in/api/users')
      const data = await response.json()
      this.users = data.data
    },
    async fetchUser(id) {
      const response = await fetch(`https://reqres.in/api/users/${id}`)
      const data = await response.json()
      this.user = data.data
    },
    async createUser(user) {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()
      this.users.push(data)
    },
    async updateUser(id, user) {
      await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      this.fetchUsers()
    },
    async deleteUser(id) {
      await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE'
      })
      this.fetchUsers()
    }
  }
})

