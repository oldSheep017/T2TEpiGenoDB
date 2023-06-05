<template>
	<section class="w-screen">
		<AppHeader />
		<main class="w-full">
			<router-view />
		</main>
		<AppFooter />
	</section>
</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

