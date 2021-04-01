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
            <div class="text-h6">Report</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                contracted
                done-color="accent"
                active-color="info"
                animated
              >
                <q-step
                  :name="1"
                  title=""
                  icon="settings"
                  :done="step > 1"
                >
                  <q-option-group
                    :options="options"
                    label="Notifications"
                    type="checkbox"
                    v-model="group"
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="Create an ad"
                  icon="fas fa-home"
                  prefix="5"
                  :done="step > 3"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="Create an ad"
                  icon="add_comment"
                  :done="step > 4"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="Create an ad"
                  icon="add_comment"
                  :done="step > 5"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="Create an ad"
                  icon="add_comment"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 2" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template>
              </q-stepper>
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

  export default {
    data: () => ({
      tab: 'report',
      step: 1,
      group: [],
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', },
        { label: 'Picture uploaded', value: 'upload', }
      ]
    }),
    components: {
      // VueStep
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>