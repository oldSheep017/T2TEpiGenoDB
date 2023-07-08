<template>
  <div class="banner"></div>
  <main class="w-full py-20 flex gap-8 box-border lg:px-24 md:px-64">
    <aside class="species w-48 border border-[#adadad]">
      <div class="box-border py-3 px-2 bg-[#428128] text-white cursor-default">Species</div>
      <template v-for="s in species">
        <div
          :class="{'active': currentSpecies === s}"
          @click="switchCurrentSpecies(s)"
          class="border-y py-2 px-2 border-[#adadad] text-sm select-none cursor-pointer transition-colors hover:bg-gray-600 hover:text-white"
        >
          <span>{{ s }}</span>
        </div>
      </template>
    </aside>
    <main class="flex flex-col">
      <nav class="flex flex-wrap">
        <span class="w-max px-3 py-2 font-bold">Study:</span>
        <template v-for="a in currentAccessionList">
          <span
            @click="switchCurrentAccession(a)"
            :class="{'active-accession': a === currentAccession}"
            class="transition-colors cursor-pointer text-blue-600 w-max px-3 py-2 hover:bg-slate-200">{{ a }}</span>
        </template>
      </nav>
      <StudyTable :current="currentStudy" />
    </main>
  </main>
</template>

<script setup>
import StudyTable from './components/StudyTable.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import studies, { getSpecies } from '@/dictionary/study'

const route = useRoute()

const currentStudy = ref({})
const currentSpecies = ref('')
const currentAccessionList = ref([])
const currentAccession = ref('')

const switchCurrentAccessionList = (a) => {
  currentAccessionList.value = a
}

const switchCurrentAccession = (a) => {
  currentAccession.value = a
  currentStudy.value = studies.find(i => i.accession === a)
  console.log({ a })
}

const switchCurrentSpecies = (s) => {
  currentSpecies.value = s
  const newAccessionList = studies.filter(i => i.category === s).map(j => j.accession)
  switchCurrentAccessionList(newAccessionList)
  console.log({newAccessionList})
  switchCurrentAccession(newAccessionList[0])
}

// initializing the all species existing(left menu)
const species = getSpecies()

// route query
switchCurrentSpecies(route.query.species)

</script>

<style scoped>

.active {
  @apply bg-gray-500 text-white;
}
.active-accession {
  @apply border border-slate-300;
}
</style>