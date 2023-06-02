<template>
	<!-- Responsive Design -->
	<nav
		class="relative md:h-full md:w-auto md:p-0 w-14 h-14 md:rounded-none rounded-full justify-center items-center box-border md:hover:bg-none hover:bg-slate-200 p-2"
	>
		<img
			src="../../assets/icons/menu.svg"
			class="md:hidden rounded-3xl"
			@click="toggleMenuList"
		/>

		<div
			class="md:w-full md:h-full md:static md:flex-row md:border-0 md:top-0 md:right-0 flex transition-all flex-col absolute border border-slate-200 w-28 top-16 right-14"
      :class="[showMenu ? 'left-[-50px]' : 'left-[1000px]']"
     >
			<template v-for="name in menuList" v-bind:key="name">
				<menu-item :name="name" :active="activeRouteName === name">
					{{ name }}
				</menu-item>
			</template>
		</div>
	</nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeRouteName = ref('Home')
const showMenu = ref(false)

const menuList = ['Home', 'Search', 'Browse', 'Download', 'Contact', 'Help']

const toggleMenuList = () => {
	showMenu.value = !showMenu.value
}

// watching current-page route name
watch(
	() => route.name,
	(newValue, oldValue) => {
		activeRouteName.value = newValue
	},
	{ immediate: true }
)

</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
	transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
		transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.menu-enter-from,
.menu-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
