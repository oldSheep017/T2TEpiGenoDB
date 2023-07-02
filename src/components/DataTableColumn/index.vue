<template>
  <tr>
    <slot :row="row" />
  </tr>
</template>

<script setup>
defineOptions({
  name: 'DataTableColumn'
})
const props = defineProps({
  row: {
    type: Object
  },
  label: {
    type: String
  },
  width: {
    type: Number
  }
})
</script>

<style scoped></style>