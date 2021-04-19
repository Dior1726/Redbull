<template>
  <q-page>
    <q-tabs
      class="full-width bg-accent-light text-white"
      v-model="tab"
      align="justify"
    >
      <q-tab
        label="Graphics"
        name="graphics"
        no-caps
      />
      <q-tab
        label="Insights"
        name="insights"
        no-caps
      />
    </q-tabs>
    <div>
      <q-tab-panels v-model="tab" animated style="background: #f7f7f9">
          <q-tab-panel name="graphics">
            <div class="row q-col-gutter-md q-pa-xs">

              <div class="col-md-6 col-sm-12 col-xs-12">
                <card-base>
                  <apex-simple-pie-chart :salesList="salesList"></apex-simple-pie-chart>
                </card-base>
              </div>

              <div class="col-md-6 col-sm-12 col-xs-12">
                <card-base>
                  <apex-stacked-columns-100 :sales='salesData' />
                </card-base>
              </div>

            </div>
          </q-tab-panel>

          <q-tab-panel name="insights">
            <div class="text-h6">Insights</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import salesData from "src/static/sales.json"

import CardBase from 'components/CardBase'
import ApexSimplePieChart from "components/ApexSimplePieChart"
import ApexStackedColumns100 from "components/ApexStackedColumns100"

  export default {
    data: () => ({
      tab: 'graphics',
      salesData,
      salesList: []
    }),
    components: {
      CardBase,
      ApexSimplePieChart,
      ApexStackedColumns100,
    },
    created() {
      this.allAmount()
    },
    mounted() {
      
    },
    methods: {
      allAmount() {
        // не самый оптимальный вариант
        let arr = [], data = 0, data1 = 0, data2 = 0, data3 = 0
        let taycan = this.salesData.filter(item => item.team == "Taycan")
        taycan.map(item => {
          data += +item.amount  
        })

        let tornado = this.salesData.filter(item => item.team == "Tornado")
        tornado.map(item => {
          data1 += +item.amount  
        })

        let yerlan = this.salesData.filter(item => item.team == "Yerlans team")
        yerlan.map(item => {
          data2 += +item.amount  
        })

        let southPark = this.salesData.filter(item => item.team == "South Park")
        southPark.map(item => {
          data3 += +item.amount  
        })
        arr.push(data)
        arr.push(data1)
        arr.push(data2)
        arr.push(data3)

        this.salesList = arr
      }
    },
    computed: {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>