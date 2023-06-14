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
        <div>2</div>
        <div>
          <BarChart title="The number of biotype in CHM13" class=" scale-110" :data="biotype" />
        </div>
        <div>4</div>
      </div>
    </section>

    <section>
      <div class="section-title">
        <img class="mr-2" src="../../assets/icons/DNA.svg" />
        New gap genes overlap with the genomic region
      </div>
      <div class="w-full h-auto border box-border border-slate-500 overflow-y-auto">
        <DataTable :table-data="genes" />
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
import { onMounted, ref, reactive } from 'vue';
import { useRoute } from 'vue-router'
import BarChart from '../../components/BarChart'
import DataTable from '../../components/DataTable'
import http from '../../utils/http'
defineOptions({
  name: 'Analysis'
})

const route = useRoute()

const loading = ref(true)
const genes = ref([])
const histone = ref([])
const variation = ref([])
const biotype = ref({})
const basicSearchInfo = reactive({
  chromosome: '',
  start: '',
  end: ''
})

// init basic search information
basicSearchInfo.chromosome = route.query.chromosome
basicSearchInfo.start = route.query.start
basicSearchInfo.end = route.query.end

http.get(`/gene/locus?chromosome=${route.query.chromosome}&start=${route.query.start}&end=${route.query.end}`)
  .then(res => {
    genes.value = res.data.genes
    histone.value = res.data.histone
    variation.value = res.data.variation
    biotype.value = res.data.biotype
    loading.value = false
    console.log({ genes: genes.value, histone: histone.value, variation: variation.value, biotype: biotype.value })
  })
</script>

<style scoped>
.section-title {
  @apply text-3xl flex my-3;
}

/* 
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

td, th {
  @apply h-full text-center;
}

td:hover {
  background-color: #eee;
} */
</style>