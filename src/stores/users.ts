import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { User } from '@/types'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[] | []>([])
  const isLoading = ref<boolean>(false)
  const isError = ref<boolean>(false)

  const fetchUsers = async () => {
    try {
      isLoading.value = true
      isError.value = false

      await fetch("https://random-data-api.com/api/v2/users?size=4")
        .then((response) => response.json())
        .then((data) => {
          users.value = data
          saveUsersToLocalStorage()
          isLoading.value = false
        })
    } catch (error) {
      isError.value = true
    }
  }

  const getUsersFromLocalStorage = () => {
    const usersFromLocalStorage = localStorage.getItem('users')

    if (usersFromLocalStorage) {
      users.value = JSON.parse(usersFromLocalStorage)
    }
  }

  const saveUsersToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users.value))
  }

  const clearUsers = () => {
    localStorage.removeItem('users')
    users.value = []
  }

  return {
    users,
    isLoading,
    isError,
    fetchUsers,
    getUsersFromLocalStorage,
    saveUsersToLocalStorage,
    clearUsers
  }
})
