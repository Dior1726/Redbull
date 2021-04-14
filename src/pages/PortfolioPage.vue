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

            <div v-for="team in ports" :key="team.id">
              <div class="text-h6 q-my-sm"> {{team.name}} </div>
              <div v-for="project in team.projects" :key="project.id">
                <div @click="clickStep(project.id)" class="flex bg-grey justify-between items-center q-pt-sm border-top">
                  <div class="text-subtitle1"> {{project.name}} </div>
                  <div class=" q-px-md text-grey-7 text-right" :class="{'translate':project.id == clickId}">
                    <q-icon size="14px" class="fas fa-chevron-down"></q-icon>
                  </div>
                </div>
                <q-stepper
                  flat
                  header-nav
                  v-model="step"
                  :ref="'stepper' + project.id"
                  alternative-labels
                  done-color="accent"
                  active-color="accent-light"
                  animated
                  
                >
                  <q-step
                    v-for="stage in project.stage"
                    :key="stage.id"
                    :name="stage.id"
                    title=""
                    :caption="stage.days + ''"
                    icon="settings"
                    :done="stage.is_done"
                    v-show="project.id === clickId"
                    :header-nav="stage.is_done"
                  >
                    <q-checkbox 
                      v-for="step in stage.steps" 
                      :key="step.id" 
                      :value="step.checked"
                      :label="step.name" 
                      color="accent"
                    />
                  </q-step>

                  <!-- <template  v-slot:navigation>
                    <q-stepper-navigation>
                      <q-btn  @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                      <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </template> -->
                </q-stepper>
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

import portfolioData from "src/static/Portfolio.json"

  export default {
    data: () => ({
      ports: portfolioData,
      tab: 'report',
      clickId: false,
      step: 1,
      group: ['bat', 'friend', 'upload'],
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', },
        { label: 'Picture uploaded', value: 'upload', },
        { label: 'Picture ', value: 'up', },
        { label: 'Picture as', value: 'pd', },
      ]
    }),
    components: {
      // VueStep
    },
    methods: {
      clickStep(id) {
        this.clickId = id
      }
    },
    mounted() {
      
    }
  }
</script>

<style lang="scss" scoped>
.border-top {
  border-top: 1px solid #e5e5e5;
}

.q-stepper {
  &::v-deep {
    .q-stepper__tab {
      min-height: 60px;
      padding: 10px 0 !important;
    }
    .q-stepper__step-inner {
      padding: 12px;
    }
    .q-stepper__nav {
      padding-left: 12px;
    }
  }
}

.translate {
  i {
    transform: rotate(180deg);
  }
}
</style>