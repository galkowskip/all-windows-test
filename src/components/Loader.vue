<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;

  &__spinner {
    width: 5rem;
    height: 5rem;
    border: 5px solid var(--primary-color);
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
