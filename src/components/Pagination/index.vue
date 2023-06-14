<template>
  <section class="flex h-10 w-max box-border border border-gray-400 my-2">
    <div class="flex justify-center items-center text-sm border-r border-gray-400 px-2" @click="prev">Previous</div>
    <template v-for="i in 6">
      <div class="border-r border-gray-400 h-full w-9 flex justify-center items-center">{{ i }}</div>
    </template>
    <div class="flex justify-center items-center text-sm px-2" @click="next">Next</div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'Pagination'
})

const props = defineProps({
  page: Number,
  count: Number
})

const emit = defineEmits(['change'])

const page = computed(() => props.page)
const count = computed(() => props.count)


const prev = () => {
  if (page.value == 1) {
    return 0
  }
  emit('change', page - 1)
}

const changePage = () => {}

const next = () => {
  if (page.value === count.value) {
    return 0
  }
  emit('change', page + 1)
}
</script>

<style scoped></style>