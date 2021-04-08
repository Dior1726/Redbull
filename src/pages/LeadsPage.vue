<template>
  <q-page >
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
    <div class="">
      <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="graphics">
            <div class="text-h6 q-mb-md"> title </div>
            <div class="row q-col-gutter-md q-pa-xs">

              <div class="col-md-6 col-sm-12 col-xs-12">
                <card-base>
                  <apex-simple-pie-chart></apex-simple-pie-chart>
                </card-base>
              </div>

              <div class="col-md-6 col-sm-12 col-xs-12">
                <card-base>
                  <apex-column-with-data-labels />
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
import CardBase from 'components/CardBase'
import ApexColumnWithDataLabels from 'src/components/ApexColumnWithDataLabels.vue'
import ApexSimplePieChart from "components/ApexSimplePieChart"


  export default {
    data: () => ({
      tab: 'graphics'
    }),
    components: {
      CardBase, ApexColumnWithDataLabels,
      ApexSimplePieChart
    }
  }
</script>

<style lang="scss" scoped>

</style>