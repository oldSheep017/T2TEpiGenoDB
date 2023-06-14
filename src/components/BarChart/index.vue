<template>
  <section class="w-full h-full" id="barChart"></section>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
defineOptions({
  name: 'BarChart'
})
const props = defineProps({
  title: String,
  data: Object
})

// chart instance
const chart = ref(null)

/* 
  echarts render before the component mounting, so set a 'watch' function listen change of 'props'
  execute 'chart.setOption' when props was changed.
*/
watch(() => props.data, (newValue, oldValue) => {

  const source = Object.entries(newValue)
  const option = {
    title: {
      text: props.title,
      textStyle: {
        fontFamily: 'Microsofr YaHei'
      },
      left: '30',
      top: '20'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },

      axisPointer: {
        type: 'shadow',
        snap: true,
        label: {
          show: true
        }
      }
    },
    yAxis: {},
    dataset: [
      {
        dimensions: ['biotype', 'number'],
        source
      },
      {
        transform: {
          type: 'sort',
          config: { dimension: 'number', order: 'asc' }
        }
      }
    ],
    series: {
      type: 'bar',
      encode: { x: 'biotype', y: 'number' },
      datasetIndex: 1,
      itemStyle: {
        color: '#78d5b1'
      }
    }
  };
  chart.value.setOption(option)
  chart.value.hideLoading()
})

onMounted(() => {
  chart.value = echarts.init(document.getElementById('barChart'))
  chart.value.showLoading()
})
</script>