<template>
  <div class="style-configurator">
    <div class="style-configurator__item">
      <label for="background-color">Background color:</label>
      <input
        type="color"
        id="background-color"
        v-model="styleStore.style.backgroundColor"
      />
    </div>

    <div class="style-configurator__item">
      <label for="text-color">Text color:</label>
      <input
        type="color"
        id="text-color"
        v-model="styleStore.style.textColor"
      />
    </div>

    <div class="style-configurator__item">
      <label for="primary-color">Primary color:</label>
      <input
        type="color"
        id="primary-color"
        v-model="styleStore.style.primaryColor"
      />
    </div>

    <div class="style-configurator__item">
      <label for="text-size">Text size:</label>
      <input
        type="range"
        min="1"
        max="40"
        v-model="styleStore.style.textSize"
        class="slider"
        id="text-size"
      />

      <span
        :style="`font-size: ${styleStore.style.textSize}px; line-height: 20px`"
        >{{ styleStore.style.textSize }}px</span
      >
    </div>
  </div>
  <div class="style-configurator__actions">
    <button @click="styleStore.saveStyleToLocalStorage">Save style</button>

    <button @click="styleStore.resetStyle">Go back to default values</button>
  </div>
</template>

<script setup lang="ts">
import { useStyleStore } from "@/stores/style";

const styleStore = useStyleStore();
</script>

<style lang="scss">
.style-configurator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    label {
      font-size: 1.25rem;
      color: var(--text-color);
    }

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }

    input[type="color"] {
      width: 1.5rem;
      min-height: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
    }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
      width: 192px;

      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        background-color: var(--primary-color);
        border-radius: 0.5rem;
        height: 6px;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -5px;
        border: 2px solid #fff;
        background-color: var(--primary-color);
        border-radius: 0.5rem;
        height: 16px;
        width: 16px;
      }
      &:focus::-webkit-slider-thumb {
        outline: 0px;
      }
      &::-moz-range-track {
        background-color: var(--primary-color);
        border-radius: 0.5rem;
        height: 6px;
      }
      &::-moz-range-thumb {
        border: 2px solid #fff;
        background-color: var(--primary-color);
        border-radius: 16px;
        height: 16px;
        width: 16px;
      }

      &:focus::-moz-range-thumb {
        outline: 0px;
      }
    }
  }
  &__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    @media (max-width: 500px) {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }
  }
}
</style>
