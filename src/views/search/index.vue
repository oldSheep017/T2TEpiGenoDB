<template>
	<div class="main-title">Search</div>
	<div class="w-full h-max box-border p-10">
		<nav class="collapse-item" :class="activeClass[0]">
			<div class="title" @click="changeCollapse" data-index="0">
				Search by Gene locus
			</div>
			<main class="w-full h-[500px] grid grid-cols-2 border-x border-[#2e5e1c]">
				<!-- Form -->
				<section class="h-full box-border px-8">
					<div class="grid grid-rows-[7]">
						<!-- chromosome label -->
						<div class="m-4 text-lg font-semibold">Chromosome</div>
						<!-- chromosome select -->
						<div>
							<select name="" id="" class="h-12 w-full box-border px-4 rounded-md border border-gray-500"
								v-model="geneLocus.chromosome">
								<template v-for="op in options.chromosome">
									<option :value="op.value">{{ op.label }}</option>
								</template>
							</select>
						</div>
						<!-- start position label -->
						<div class="m-4 text-lg font-semibold">
							Start Position
						</div>
						<!-- start position input -->
						<div>
							<input class="h-12 w-full box-border px-4 rounded-md border border-gray-500"
								placeholder="start position    e.g.: 47648539" type="text" v-model="geneLocus.start" />
						</div>
						<!-- end position label -->
						<div class="m-4 text-lg font-semibold">
							End Position
						</div>
						<!-- end position input -->
						<div>
							<input class="h-12 w-full box-border px-4 rounded-md border border-gray-500"
								placeholder="end position    e.g.: 4865523" type="text" v-model="geneLocus.end" />
						</div>
						<!-- button area -->
						<div class="flex md:flex-row flex-col justify-end items-center my-3 w-full">
							<button class="search-button md:w-auto md:my-0 my-1 w-full" @click="GENELOCUS.query">Start analysis</button>
							<button class="search-button md:w-auto md:my-0 my-1 w-full" @click="GENELOCUS.reset">Reset</button>
							<button class="search-button md:w-auto md:my-0 my-1 w-full" @click="GENELOCUS.example">For Example</button>
						</div>
					</div>
				</section>
				<!-- Introdunction -->
				<section class="box-border p-8">
					Function introduction: In the ‘genomic-regions-based’
					analysis, CRCdb can identify the SEs by inputting the
					genomic regions, and then the SEs associated TF genes can be
					obtained in the analysis result table. Parameter
					explanation: Chromosome: Chromatin number of the entered
					genomic region. Start position: Start position of the
					entered genomic region. End position: End position of the
					entered genomic region.
				</section>
			</main>
		</nav>
		<nav class="collapse-item" :class="activeClass[1]">
			<div class="title" @click="changeCollapse" data-index="1">
				Search by Gene
			</div>
			<main class="w-full h-[500px] border-x border-[#2e5e1c] flex">
				<section></section>
			</main>
		</nav>
		<nav class="collapse-item" :class="activeClass[2]">
			<div class="title" @click="changeCollapse" data-index="2">
				Search by Sequence
			</div>
			<main class="w-full h-[500px] border-x border-[#2e5e1c]"></main>
		</nav>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { options } from '../../utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const active = ref(0)
const activeClass = ref(['active', '', ''])
const changeCollapse = e => {
	let activeIndex = e.target.dataset.index * 1 // convert to Number type
	// Accordion effect
	if (activeIndex === active.value) {
		activeIndex = -1
	}
	activeClass.value = activeClass.value.map((c, index) =>
		index == activeIndex ? 'active' : ''
	)
	active.value = activeIndex
}

// Form Data
const geneLocus = reactive({
	chromosome: 'Chr1',
	start: '',
	end: '',
})

const gene = reactive({})
const sequence = reactive({})

// Methods
const GENELOCUS = {
	query() {
		// http.get(`/gene/locus?chromosome=${geneLocus.chromosome}&start=${geneLocus.start}&end=${geneLocus.end}`).then(res => {
		// 	console.log('genelocus search result: ', res)
		// })
		router.push({ name: 'Analysis', query: { ...geneLocus } })
	},
	reset() {
		geneLocus.chromosome = 'Chr1'
		geneLocus.start = '0'
		geneLocus.end = '0'
	},
	example() {
		geneLocus.chromosome = 'Chr1'
		geneLocus.start = '125494410'
		geneLocus.end = '247971178'
	}
}
</script>

<style scoped>
.main-title {
	@apply text-5xl mx-10 my-4 transition-all w-[6ch] h-12;
}

.main-title:hover {
	cursor: default;
	filter: drop-shadow(0 0 16px #1e85d9);
}

.collapse-item {
	transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
	@apply w-full max-h-20 overflow-hidden box-border border-y border-gray-300;
}

nav.active {
	max-height: calc(4rem + 500px);
}

.title {
	@apply w-full h-20 bg-[#2e5e1c] text-white cursor-pointer flex items-center box-border px-6 text-2xl;
}

.search-button {
	@apply bg-[#2e5e1c] text-white p-2 rounded-md flex justify-center items-center active:bg-orange-500;
}

.search-button:nth-child(2) {
	@apply mx-4;
}
</style>
