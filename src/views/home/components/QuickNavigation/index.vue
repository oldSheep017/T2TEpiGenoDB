<template>
  <div class="text-white flex flex-col">
    <img :src="icon" />
    <slot></slot>
    <slot name="amount"></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: String
})
defineOptions({
  name: 'QuickNavigation'
})

const icon = computed(() => `@/assets/quick-icon/${props.name}.png`)


</script>

<style scoped></style>