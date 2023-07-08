<template>
  <div class="container w-full h-auto grid cursor-default">
    <!-- row 1 -->
    <div class="row grid grid-cols-8">
      <div class="title">Title:</div>
      <div class="col-span-7 title">{{ study.title || '-' }}</div>
    </div>
    <!-- row 2 -->
    <div class="row grid grid-cols-8">
      <div class="title">Accession:</div>
      <div class="col-span-3"><a :href="study.study || '#'" target="_blank"
          class=" text-blue-500 cursor-pointer hover:underline">{{ study.accession }}</a></div>
      <div class="title">PMID:</div>
      <div class="col-span-3">{{ study.pmid || '-' }}</div>
    </div>
    <!-- row 3 -->
    <div class="row grid grid-cols-8">
      <div class="title">Bio-source:</div>
      <div class="col-span-3">{{ study['bio-source'] || '-' }}</div>
      <div class="title">Treatment:</div>
      <div class="col-span-3">{{ study.treatment || '-' }}</div>
    </div>
    <!-- row 4 -->
    <div class="row grid grid-cols-8">
      <div class="title">Ref-genome:</div>
      <div class="col-span-3">{{ study['ref-genome'] || '-' }}</div>
      <div class="title">Download:</div>
      <div class="col-span-3"><a :href="study.link || '#'" class="text-sm text-blue-500 cursor-pointer hover:underline" target="_blank">{{ study.link || '-' }}</a></div>
    </div>
    <!-- row 5 -->
    <div class="row grid grid-cols-8">
      <div class="title">Abstract:</div>
      <div class="col-span-7 box-border p-4">{{ study.abstract || '-' }}</div>
    </div>
    <!-- row 6 -->
    <div class="row grid grid-cols-8">
      <div class="title">FastQC:</div>
      <div class="col-span-2">{{ study.fastQC || '-' }}</div>
      <div class="title">Quality control assessmenet:</div>
      <div class="col-span-4">{{ study.qualityControlAssessmenet || '-' }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['current'])

const study = computed(() => props.current)
</script>

<style scoped>
.container {
  grid-template-rows: auto auto auto auto auto auto;
  border: 1px solid #adadad;
}

.container .row div {
  @apply flex justify-center items-center py-2 text-center border border-[#adadad] text-xs md:text-base;
}

.title {
  @apply font-semibold text-xs md:text-base;
}
</style>