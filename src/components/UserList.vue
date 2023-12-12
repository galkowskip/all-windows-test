<template>
  <!-- Error State -->
  <div class="message-box" v-if="isError">
    Error while loading users
    <button @click="emit('loadUsers')">Try again</button>
  </div>
  <!-- Normal State -->
  <div class="user-list" v-else-if="users.length">
    <UserContainer v-for="user in users" :key="user.id" :user="user" />
  </div>
  <!-- Loading State -->
  <div class="message-box" v-else-if="isLoading">
    <Loader />
  </div>

  <!-- Empty State -->
  <div class="message-box" v-else>
    No users loaded yet
    <button @click="emit('loadUsers')">Load Users</button>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types";
import { defineProps } from "vue";

import UserContainer from "./UserContainer.vue";
import Loader from "./Loader.vue";

const { users, isLoading, isError } = defineProps<{
  users: User[] | [];
  isLoading: boolean;
  isError: boolean;
}>();

const emit = defineEmits(["loadUsers"]);
</script>

<style lang="scss">
.message-box {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: var(--text-color);
  height: 500px;
  max-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>
