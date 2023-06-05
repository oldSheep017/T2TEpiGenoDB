<template>
	<div
		class="md:h-full md:w-36 md:justify-center md:flex-col md:border-x md:shadow-none shadow-lg h-12 box-border px-3 w-full flex items-center text-sm text-gray-600 border-white transition-all bg-white hover:text-white hover:bg-[#165f0b] hover:cursor-pointer"
		:class="{ 'active': active }"
		@click="navigateTo"
	>
		<i :class="iconClass" class="md:m-0 mx-1" />
		<slot></slot>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
	name: String,
	active: Boolean
})
const active = computed(() => props.active)
const iconClass = computed(() => `cgge cgge-${props.name.toLowerCase()}`)
const navigateTo = () => {
	router.replace({ name: props.name })
}
</script>

<style scoped>
.active {
	/* @apply text-white bg-[#0095ff] font-bold */
	@apply text-white bg-[#165f0b] font-bold
}
/* class="h-full w-36 flex flex-col justify-center items-center text-lg text-gray-700 box-border border-x border-white transition-all hover:text-white hover:bg-sky-600 hover:cursor-pointer" */

</style>
