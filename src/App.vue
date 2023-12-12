<script setup lang="ts">
import { onBeforeMount } from "vue";

import { RouterView } from "vue-router";
import { useStyleStore } from "@/stores/style";

const styleStore = useStyleStore();

onBeforeMount(() => {
  styleStore.getStyleFromLocalStorage();
});
</script>

<template>
  <RouterView />
</template>

<style></style>
