<template>
  <div class="w-full h-min">
    <!-- Introduction -->
    <div class="py-8 flex flex-col h-auto w-full box-border md:px-32 xl:px-72 px-12 bg-[#165f0b] text-white">
      <h1 class="my-3 text-6xl font-semibold font-newroman">Introduction</h1>
      <p class="font-medium text-xl font-newroman indent-4 my-2 leading-[1.6]">
        With the rapid advancement and widespread application of genome sequencing technologies in recent years, the
        unveiling of the human Telomere-to-Telomere (T2T) genome has been closely followed by the release of T2T genomes
        from various other flora and fauna. These novel, high-quality genome data provide us with a unique perspective to
        probe into biodiversity and genetic variations. To delve deeper into these freshly published genomic data, we
        designed and performed a series of computational analyses. Initially, we aligned each species' T2T genome with its
        corresponding reference genome to uncover new genomic regions. This comparative analysis not only assists in
        unveiling new information concealed within genomes but also grants us a fresh lens to comprehend genome structure
        and function.
      </p>
      <p class="font-medium text-xl font-newroman indent-4 my-2 leading-[1.6]">
        We have developed a new database, "T2TEpiGenoDB", which consolidates and exhibits our genetic and epigenetic
        analysis results of the new genomic regions derived from the comparative analysis. Within T2TEpiGenoDB, users can
        retrieve the new regions of each species and their corresponding genetic and epigenetic features, providing vital
        resources for further biological and disease-related research. T2TEpiGenoDB meticulously documents the new regions
        obtained post genome alignment, along with their genomic positions, associated genes, probable functional
        annotations, and related genetic and epigenetic traits. To aid researchers in conducting in-depth analysis, we
        offer a range of practical tools, such as BLAST comparison, enabling users to determine whether their specific
        sequences of interest exist within these new regions. Moreover, the database showcases statistical information
        such as the frequency and correlation of genes and transcription factors in the new regions, offering vital
        references for further research and interpretation of the new regions.
      </p>
      <p class="font-medium text-xl font-newroman indent-4 my-2 leading-[1.6]">
        In summary, T2TEpiGenoDB provides a convenient platform for researchers to access and analyze new gene regions and
        their associated genetic and epigenetic characteristics. We anticipate that T2TEpiGenoDB will aid researchers in
        revealing the crucial roles these new regions play in biological function and disease genesis and progression.
      </p>
    </div>
    <!-- Quick Start -->
    <div class="bg-white md:px-32 xl:px-72 px-12 box-border md:min-w-full">
      <div class="w-full border-b border-gray-300 text-4xl font-semibold py-5">Quick Start</div>
      <div class="w-full bg-white grid grid-cols-3 md:grid-cols-6 gap-2 py-8 hover:cursor-pointer">
        <template v-for="(name, index) in fields" :key="index">
          <!-- Quick Navigation -->
          <div
            class="w-full h-48 border border-gray-200 shadow-md hover:shadow-xl hover:translate-y-[-12px] flex flex-col items-center transition-all justify-center gap-4 rounded-sm quick-nav">
            <img :src="getQuickIcon(name)" alt="quickicon" class="w-16 h-16 transition-all" />
            <span class="text-black text-xl transition-all">{{ name }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- Other Navigation -->
    <div class="flex w-full box-border justify-between px-12 md:px-32 xl:px-72 pb-16 gap-10">
      <!-- Getting Started -->
      <section class="flex flex-col items-start w-1/3 h-auto">
        <h3 class="xl:text-3xl md:text-xl py-4 border-b border-gray-200 mb-2 w-full">Getting Started</h3>
        <p class="text-[#4678b2] xl:text-xl hover:text-[#1178b2] hover:underline hover:cursor-pointer flex items-center">
          <i class="cgge cgge-help" />User Guide
        </p>
        <p class="xl:text-xl">We provide step-by-step guide for the use of our website.</p>
        <p class="xl:text-xl text-[#4678b2] hover:text-[#1178b2] hover:underline hover:cursor-pointer flex items-center">
          <i class="cgge cgge-contact" />
          Contact us
        </p>
      </section>
      <!-- T2TDB Data -->
      <section class="flex flex-col items-start w-1/3 h-auto">
        <h3 class="xl:text-3xl md:text-xl py-4 border-b border-gray-200 mb-2 w-full">T2TEpiGenoDB data</h3>
        <p class="text-[#4678b2] xl:text-xl hover:text-[#1178b2] hover:underline hover:cursor-pointer flex items-center">
          <i class="cgge cgge-download" />Get T2TEpiGenoDB Data
        </p>
        <p class="xl:text-xl">Downloads for the latest version (v1) of the datasets</p>
      </section>
      <!-- News -->
      <section class="flex flex-col items-start w-1/3 h-auto">
        <h3 class="xl:text-3xl md:text-xl py-4 border-b border-gray-200 mb-2 w-full">News</h3>
      </section>
    </div>
  </div>
</template>

<script setup>
const fields = ['Human', 'Rice', 'Arabidopsis']
const getQuickIcon = (name) => {
  return `https://young-1306090592.cos.ap-guangzhou.myqcloud.com/cgge/${name.toLowerCase()}.png`
}

</script>

<style scoped>
.quick-nav:hover>img {
  transform: scale(1.1);
}

.quick-nav:hover>span {
  transform: scale(1.1);
}
</style>