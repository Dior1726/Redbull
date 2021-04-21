<template>
  <q-page class="">
    <q-tabs
      class="full-width bg-accent-light text-white"
      v-model="tab"
      align="justify"
    >
      <q-tab
        label="Report"
        name="report"
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
          <q-tab-panel name="report">

            <div v-for="team in leads" :key="team.id" class="q-mb-lg">
              <div class="q-mt-sm q-mb-md" style="font-weight: 600; font-size: 18px;"> {{team.name}} </div>
              <stepper v-for="project in team.projects" :project="project" :key="project.id">
              </stepper>
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

import leadsData from "src/static/leads.json"
import Stepper from 'src/components/ui/Stepper.vue'

  export default {
    data: () => ({
      leads: leadsData,
      tab: 'report',
      clickId: false,
      step: 1
    }),
    components: {
      Stepper
    },
   
    methods: {
      
    },
    mounted() {
      
    }
  }
</script>

<style lang="scss" scoped>
  
</style>