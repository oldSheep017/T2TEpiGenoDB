<template>
	<header
		class="h-16 shrink-0 w-full grow-0 bg-white box-border border-b border-light-600 flex justify-between items-cente px-8 md:px-20 text-xl">
		<div class="flex items-center">
			<img src="../../public/logo.svg" class="w-12 h-12" />
			<div class="flex flex-col mx-2">
				<span class="text-3xl text-gray-600 font-bold drop-shadow-lg font-brussels cursor-default">T2TEpiGenoDB</span>
				<!-- <span class="text-base text-gray-600 draop-shadow-lg cursor-default">A database</span> -->
			</div>
		</div>
		<Menu />
	</header>
</template>

<script setup>
import Menu from '../components/Menu'
</script>
