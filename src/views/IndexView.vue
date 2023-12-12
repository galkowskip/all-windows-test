<script setup lang="ts">
import UserList from "@/components/UserList.vue";
import Header from "@/components/Header.vue";

import { onBeforeMount } from "vue";
import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore();

onBeforeMount(() => {
  usersStore.getUsersFromLocalStorage();
});
</script>

<template>
  <Header>
    <button class="btn" @click="usersStore.fetchUsers">Load Users</button>

    <button class="btn" @click="usersStore.clearUsers">Clear Users</button>
  </Header>

  <main>
    <UserList
      :users="usersStore.users"
      :isLoading="usersStore.isLoading"
      :isError="usersStore.isError"
      @loadUsers="usersStore.fetchUsers"
    />
  </main>
</template>
