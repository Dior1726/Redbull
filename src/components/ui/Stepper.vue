<template>
  <div class="q-mb-md stepper-area">
    <div @click="showStepContent" class="flex justify-between items-center q-py-sm ">
      <div class="text-subtitle1"> {{project.name}} </div>
      <div class="text-grey-7 text-right" :class="{'translate':showStep}">
        <q-icon size="12px" class="fas fa-chevron-down" ></q-icon>
      </div>
    </div>
    <q-stepper
      flat
      header-nav
      v-model="step"
      ref="stepper"
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
        icon="uil-lock-alt"
        done-icon="uil-check"
        :done="stage.status == 1 || stage.status == 2"
        :header-nav="stage.status == 1 || stage.status == 2"
        v-show="showStep"
      >
        <q-checkbox 
          v-for="step in stage.steps" 
          :key="step.id" 
          :value="step.checked == 1"
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
</template>

<script>
  export default {
    props: ['project'],
    data () {
      return {
        step: null,
        showStep: false
      }
    } ,
    mounted() {
      this.currentStep()
    },
    methods: {
      showStepContent() {
        this.showStep = !this.showStep
      },
      currentStep() {
        if(this.project) {
          this.project.stage.forEach(element => {
            if(element.status == 2) {
              let stepIndex = this.project.stage.indexOf(element)
              this.step = stepIndex + 1
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.stepper-area {
  border-top: 1px solid #e5e5e5;
}

// Stepper styles for checkbox, padding, background and other
.q-stepper {
  &::v-deep {
    .q-stepper__tab {
      min-height: 60px;
      padding: 10px 0 !important;
    }
    .q-stepper__step-inner {
      padding: 12px 12px 12px 24px;
      display: flex;
      flex-direction: column;
      .q-checkbox__bg {
        width: 24px;
        height: 24px;
        min-height: 24px;
        border-radius: 20px;
        border: 1px solid #e5e5e5;
        display: flex;
        .q-checkbox__svg {
          margin: auto;
          width: 70% !important;
          height: 70% !important;
        }
      }
      .q-checkbox__inner--truthy .q-checkbox__bg {
        border-radius: 20px;
      }
    }
    .q-checkbox__inner--falsy {
      .q-checkbox__bg {
        background: #e5e5e5;
      }
    }
    .q-stepper__nav {
      padding-left: 12px;
    }
  }
}

i {
  transition: transform .3s;
  color: #909090;
}

.translate {
  i {
    transition: transform .3s;
    transform: rotate(180deg);
  }
}
</style>