<template>
  <apexchart type="pie" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexSimplePieChart',
  props: ['arr'],
  data () {
    return {
      series: this.arr || [45,46,47,44],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Pie',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        labels: ['Taycan', 'Tornado', 'Yerlans Team', "South Park"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: '100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#apexchartsnjp77dcqf {
  width: 100% !important;
}
</style>