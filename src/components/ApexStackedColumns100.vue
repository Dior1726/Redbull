<template>
  <apexchart type="bar" height="230" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexStackedColumns100',
  props:['sales'],
  data () {
    return {
      series: [{
        name: 'Taycan',
        data: []
      }, {
        name: 'Tornado',
        data: []
      },{
        name: 'Yerlans Team',
        data: []
      }, {
        name: 'South Park',
        data: []
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
          text: "За последние 8 месяцев",
          align: 'left',
          style: {
            color: '#000',
            fontSize: '12px'
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
          categories: [],
          labels: {
            style: {
              colors: '#000'
            }
          }
        },
        yaxis: {
          labels: {
            show: false,
            style: {
              colors: '#fff',
            }
          },
        },
        fill: {
          opacity: 1
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'left',
          offsetX: 0,
          offsetY: 100,
          labels: {
            colors: '#000'
          },
          itemMargin: {
            horizontal: 10,
            vertical: 5
          },
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        dataLabels: {
          style: {
            fontSize: '8px',
            colors: ['#fff']
          }
        }
      }
    }
  },
  mounted() {
    
  },
  created() {
    this.taycanAmount()
    this.taycanCategories()
    this.tornadoAmount()
    this.yerlanAmount()
    this.southParkAmount()
  },
  computed: {
    // не самый оптимальный вариант 
    taycan() {
      let taycanData = this.sales.filter(item => item.team == 'Taycan')
      return taycanData
    },
    tornado() {
      let tornadoData = this.sales.filter(item => item.team == 'Tornado')
      return tornadoData
    },
    yerlan() {
      let yerlanData = this.sales.filter(item => item.team == 'Yerlans team')
      return yerlanData
    },
    southPark() {
      let southParkData = this.sales.filter(item => item.team == 'South Park')
      return southParkData
    }
  },
  methods: {
    // не самый оптимальный вариант 
    taycanCategories() {
      let arr = []
      this.taycan.forEach(item => {
        arr.push(item.month)
      })
      arr = arr.slice(-8)
      this.chartOptions.xaxis.categories = arr
    },
    taycanAmount() {
      let arr = []
      this.taycan.forEach(item => {
        arr.push(+item.amount)
      })
      this.series[0].data = arr.slice(-8)
    },
    tornadoAmount() {
      let arr = []
      this.tornado.forEach(item => {
        arr.push(+item.amount)
      })
      this.series[1].data = arr.slice(-8)
    },
    yerlanAmount() {
      let arr = []
      this.yerlan.forEach(item => {
        arr.push(+item.amount)
      })
      this.series[2].data = arr.slice(-8)
    },
    southParkAmount() {
      let arr = []
      this.southPark.forEach(item => {
        arr.push(+item.amount)
      })
      this.series[3].data = arr.slice(-8)
    }
  }
}
</script>
