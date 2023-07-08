<template>
  <div class="w-full h-auto box-border md:px-64 py-10">
    <section>
      <div class="section-title">
        <img class="mr-2" src="../../assets/icons/analysis.svg" />
        Genomic region
      </div>
      <div class="w-full h-auto border box-border border-slate-500 p-5 md:grid md:grid-cols-2 md:grid-rows-2">
        <div class="w-full h-full">
          <h1 class="text-2xl">Search Term</h1>
          <div class="grid grid-cols-2 grid-rows-3 w-full my-4">
            <span class=" border-b border-slate-300 p-3 font-semibold">Chromosome</span>
            <span class=" border-b border-slate-300 p-3">{{ basicSearchInfo.chromosome }}</span>
            <span class=" border-b border-slate-300 p-3 font-semibold">Start Position</span>
            <span class=" border-b border-slate-300 p-3">{{ basicSearchInfo.start }}</span>
            <span class=" border-b border-slate-300 p-3 font-semibold">End Position</span>
            <span class=" border-b border-slate-300 p-3">{{ basicSearchInfo.end }}</span>
          </div>
        </div>
        <!-- TODO: A Pie Chart -->
        <div>2</div>
        <div>
          <BarChart title="The number of biotype in CHM13" class=" scale-110" :data="biotype_chm13" />
        </div>
        <div class="flex">
          <div class=" grow h-full">
            <PieChart title="CHM13" :data="biotype_chm13_pie" />
          </div>
          <div class=" grow h-full">
            <PieChart title="GRCH38" :data="biotype_grch38_pie" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-title">
        <img class="mr-2" src="../../assets/icons/DNA.svg" />
        New gap genes overlap with the genomic region
      </div>
      <div class="w-full h-auto border box-border border-slate-500 overflow-y-auto">
        <DataTable :table-data="genes" has-element v-slot="scope">
          <div class="cursor-pointer text-blue-500 hover:underline" @click="browseChromosome(scope.row)">view</div>
        </DataTable>
      </div>
    </section>

    <section>
      <div class="section-title">
        <img class="mr-2" src="../../assets/icons/DNA.svg" />
        New gap histone overlap with the genomic region
      </div>
      <div class="w-full h-auto border box-border border-slate-500 overflow-y-auto">
        <DataTable :table-data="histone" />
      </div>
    </section>

    <section>
      <div class="section-title">
        <img class="mr-2" src="../../assets/icons/biology.svg" />
        New gap variation overlap with the genomic region
      </div>
      <div class="w-full h-auto border box-border border-slate-500 overflow-y-auto">
        <DataTable :table-data="variation" />
      </div>
    </section>
  </div>
  <div v-show="loading"
    class="w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-slate-500 text-white opacity-60">
    加载中
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import BarChart from '../../components/BarChart'
import PieChart from '../../components/PieChart'
import DataTable from '../../components/DataTable'
import http from '../../utils/http'
defineOptions({
  name: 'Analysis'
})

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const genes = ref([])
const histone = ref([])
const variation = ref([])
const biotype_chm13 = ref({})
const biotype_grch38 = ref({})

const biotype_chm13_pie = computed(() => {
  const biotypeChm13KeyValue = Object.entries(biotype_chm13.value)
  return biotypeChm13KeyValue.map(item => {
    return { name: item[0], value: item[1] }
  })
})
const biotype_grch38_pie = computed(() => {
  const biotypeGrch38KeyValue = Object.entries(biotype_grch38.value)
  return biotypeGrch38KeyValue.map(item => {
    return { name: item[0], value: item[1] }
  })
})

const basicSearchInfo = reactive({
  chromosome: '',
  start: '',
  end: ''
})

const browseChromosome = (row) => {
  router.push({ name: 'Browse' })
}

// init basic search information
basicSearchInfo.chromosome = route.query.chromosome
basicSearchInfo.start = route.query.start
basicSearchInfo.end = route.query.end

http.get(`/gene/locus?chromosome=${route.query.chromosome}&start=${route.query.start}&end=${route.query.end}`)
  .then(res => {
    genes.value = res.data.genes
    histone.value = res.data.histone
    variation.value = res.data.variation
    biotype_chm13.value = res.data.biotype_chm13
    biotype_grch38.value = res.data.biotype_grch38
    loading.value = false
  })

</script>

<style scoped>
.section-title {
  @apply text-3xl flex my-3;
}
</style>