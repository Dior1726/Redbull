<template>
  <apexchart type="donut" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexSimplePieChart',
  props: ['salesList'],
  data () {
    return {
      series: this.salesList || [45,46,47,44],
      chartOptions: {
        chart: {
          type: 'donut',
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Pie',
          align: 'left',
          style: {
            color: '#000'
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
          show: false,
          labels: {
            colors: '#000'
          }
        },
        dataLabels: {
          textAnchor: 'end',
          style: {
            colors: ['#fff']
          }
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            }, 
            donut: {
              labels: {
                show: true,
                name: {
                  show: false,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  formatter: function (val) {
                    return val
                  }
                },
                value: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: 0,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            },      
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