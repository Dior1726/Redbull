<template>
  <apexchart type="bar" height="230" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexStackedColumns100',
  data () {
    return {
      series: [{
        name: 'Taycan',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'Tornado',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      }, {
        name: 'South park',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }, {
        name: "Yerlan's team",
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          },
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        title: {
          text: undefined,
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['05', '06', '07', '08', '09', '10', '11', '12'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            show: false,
            style: {
              colors: '#fff'
            }
          },
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50,
          labels: {
            colors: '#FFF'
          }
        },
        grid: {
          show: false
        }
      }
    }
  }
}
</script>
