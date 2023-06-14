<template>
	<div>Download</div>
		<DataTable :table-data="t" />
</template>

<script setup>
import DataTable from '../../components/DataTable'
import { ref } from 'vue'


const t = ref([])

setTimeout(() => {
	t.value = [
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: 1, b: 2, c: 3 },
	]
}, 1000)
</script>

<style scoped></style>
