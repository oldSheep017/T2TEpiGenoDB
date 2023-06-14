<template>
  <div class="w-full h-auto">
    <table class="w-full">
      <tr>
        <template v-for="h in head">
          <th>{{ h }}</th>
        </template>
      </tr>
      <template v-for="d in data">
        <tr>
          <template v-for="h in head">
            <td>{{ d[h] }}</td>
          </template>
        </tr>
      </template>
    </table>

    <footer class="md:flex justify-between box-border p-10 items-center">
      <!-- page size controller -->
      <div class="w-auto h-10">
        <span>Show</span>
        <span class="mx-2">
          <select v-model="attr.pageSize" class="box-border border border-slate-400 rounded-sm px-2 py-1">
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
        </span>
        <span>entries</span>
      </div>

      <!-- pagination -->
      <div>
        <Pagination />
      </div>
    </footer>

  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Pagination from '../Pagination'
defineOptions({
  name: 'DataTable'
})
const props = defineProps({
  tableData: {
    type: Array,
    default: []
  }
})
const attr = reactive({
  page: 0,
  pageSize: 10
})
const data = computed(() => props.tableData)

const head = computed(() => props.tableData[0] ? Object.keys(props.tableData[0]) : [])


</script>

<style scoped>
table,
tr,
td,
th {
  @apply box-border border border-slate-400;
}

table {
  width: 100%;
}

tr {
  @apply h-9;
}

th {
  @apply bg-slate-100;
}

td,
th {
  @apply h-full text-center;
}

tr:hover {
  background-color: #eee;
}
</style>