<template>
  <header class="header">
    <div class="header__navigation">
      <RouterLink to="/" class="nav">Users</RouterLink>
      <RouterLink to="/style" class="nav">Style</RouterLink>
    </div>
    <div class="header__controls" v-if="slots.default">
      <slot> </slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import { useSlots } from "vue";
const slots = useSlots();
</script>

<style lang="scss">
.header {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  background: #151d26;
  @media (max-width: 700px) {
    padding: 24px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    height: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__navigation {
    display: flex;
    align-items: center;
    gap: 2rem;

    .nav {
      color: var(--background-color);
      transition: color 0.2s ease-in-out;
      font-size: 1.5rem;
      &:hover,
      &.router-link-active {
        color: var(--primary-color);
      }
    }
  }

  &__title {
    color: var(--background-color);
  }
  &__controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
