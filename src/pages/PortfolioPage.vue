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

            <!-- first company -->
            <div>
              <div class="text-h6 q-my-sm">Team Name</div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template> -->
              </q-stepper>
              </div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template> -->
              </q-stepper>
              </div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template> -->
              </q-stepper>
              </div>
            </div>

            <div style="margin-left: -30px; margin-right: -30px;">
              <q-separator size="10px" />
            </div>

            <!-- second company -->
            <div>
              <div class="text-h6 q-my-sm">Team Name</div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template> -->
              </q-stepper>
              </div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="accent" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template> -->
              </q-stepper>
              </div>
              <div>
                <div @click="clickStep" class="flex justify-between items-center q-pt-sm border-top">
                <div class="text-subtitle1">Project name</div>
                <div class=" q-px-md text-grey-7 text-right" :class="{'translate':hide}">
                  <q-icon size="14px" class="fas fa-chevron-up"></q-icon>
                </div>
              </div>
              <q-stepper
                flat
                v-model="step"
                ref="stepper"
                alternative-labels
                done-color="accent"
                active-color="accent-light"
                animated
              >
                <q-step
                  :name="1"
                  title="aaa"
                  caption="5"
                  icon="settings"
                  :done="step > 1"
                  :class="{'hidden':hide}"
                >
                  <q-option-group
                    :options="options"
                    label="2"
                    type="checkbox"
                    v-model="group"
                    disable
                    color="accent"
                  />
                </q-step>

                <q-step
                  :name="2"
                  title="1"
                  icon="create_new_folder"
                  :done="step > 2"
                  :class="{'hidden':hide}"
                >
                  An ad group contains one or more a
                </q-step>

                <q-step
                  :name="3"
                  title="4"
                  icon="fas fa-times"
                  :done="step > 3"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="4"
                  title="5"
                  icon="mail"
                  :done="step > 4"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="5"
                  title="1"
                  icon="settings"
                  :done="step > 5"
                  :class="{'hidden':hide}"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <q-step
                  :name="6"
                  title="2"
                  :class="{'hidden':hide}"
                  icon="message"
                >
                  Try out different ad text to see what brings in the most customers
                </q-step>

                <!-- <template  v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn v-show="group.length > 4" @click="$refs.stepper.next()" color="accent" :label="step === 4 ? 'Finish' : 'Continue'" />
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

  export default {
    data: () => ({
      tab: 'report',
      hide: false,
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
      clickStep() {
        this.hide = !this.hide
      }
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