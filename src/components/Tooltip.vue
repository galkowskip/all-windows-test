<template>
  <span
    class="tooltip"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
    :class="position ? `tooltip--${position}` : ''"
  >
    <slot v-bind="{ isOpen: showTooltip }"></slot>
    <Transition name="tooltip">
      <div
        ref="tooltip"
        class="tooltip__content"
        :style="{ minWidth: `${minWidth}px`, maxWidth: `${maxWidth}px` }"
        v-if="showTooltip"
      >
        <slot name="content"></slot>
      </div>
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const showTooltip = ref<boolean>(false);
const {
  minWidth = 150,
  maxWidth = 300,
  position,
} = defineProps<{
  minWidth: number;
  maxWidth: number;
  position: string;
}>();
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: inherit;
  color: inherit;

  &__content {
    position: absolute;
    top: calc(100% + 12px);
    z-index: 999;
    background-color: #fff;
    left: -1rem;
    padding: 1rem;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: block;
  }
  &--center {
    .tooltip__content {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
