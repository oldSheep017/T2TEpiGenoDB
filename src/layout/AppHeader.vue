<template>
	<header
		class=" h-16 shrink-0 w-full grow-0 bg-white box-border border-b border-light-600 flex justify-between items-center px-8 text-xl"
	>
		<div class="flex flex-col rotate-[-5deg] transition-all hover:rotate-0">
			<span class="text-2xl text-gray-600 font-bold drop-shadow-lg font-sans  cursor-default">CGGE</span>
			<span class="text-base text-gray-600 draop-shadow-lg cursor-default ml-2">A database</span>
		</div>
    <Menu />
	</header>
</template>

<script setup>
import Menu from '../components/Menu'
</script>
