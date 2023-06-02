<template>
	<section class="w-screen h-screen flex flex-col">
		<AppHeader />
		<main class="w-full grow">
      <router-view />
    </main>
		<AppFooter />
	</section>
</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<style scoped></style>
