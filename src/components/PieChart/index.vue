<template>
  <section class="w-full h-full" :id="chartDOMId"></section>
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

// may be there are mutiple 'PieChart' component, so the 'id' shouldn't be unique.
const chartDOMId = 'pieChart' + Math.random().toString(32).slice(3, 8)

// chart instance
const chart = ref(null)

/* 
  echarts render before the component mounting, so set a 'watch' function listen change of 'props'
  execute 'chart.setOption' when props was changed.
*/
watch(() => props.data, (newValue, oldValue) => {

  const option = {
    title: {
      text: props.title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: props.data,
        labelLine: {
          show: false
        },
        label: { show: false },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.value.setOption(option)
  chart.value.hideLoading()
})

onMounted(() => {
  chart.value = echarts.init(document.getElementById(chartDOMId))
  chart.value.showLoading()
})
</script>