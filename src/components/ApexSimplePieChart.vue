<template>
  <apexchart type="pie" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexSimplePieChart',
  data () {
    return {
      series: [44, 55, 13, 50],
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
        labels: ['Team A', 'Team B', 'Team C', "Team D"],
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