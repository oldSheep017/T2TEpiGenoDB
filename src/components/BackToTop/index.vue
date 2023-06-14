<template>
  <div
    class="fixed w-10 h-10 flex right-5 bottom-5 justify-center items-center text-white bg-green-600 rounded-md transition-colors hover:cursor-pointer hover:bg-green-700 hover:text-yellow-200"
    @click="backToTop"
  >
    <i class="cgge cgge-arrow-up" />
  </div>
</template>

<script setup>
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
