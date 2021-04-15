<template>
  <div>
    <div @click="showStepContent" class="flex justify-between items-center q-pt-sm ">
      <div class="text-subtitle1"> {{project.name}} </div>
      <div class=" q-px-md text-grey-7 text-right" :class="{'translate':showStep}">
        <q-icon size="14px" class="fas fa-chevron-down" ></q-icon>
      </div>
    </div>
    <q-stepper
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
        icon="uil-angry"
        done-icon="uil-smile"
        :done="stage.is_done"
        :header-nav="stage.is_done"
        v-show="showStep"
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
</template>

<script>
  export default {
    props: ['project'],
    data () {
      return {
        step: 1,
        showStep: false
      }
    } ,
    mounted() {
      console.log(this.project);
    },
    methods: {
      showStepContent() {
          this.showStep = !this.showStep
          console.log(this.showStep);
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
      padding: 12px 12px 12px 24px;
    }
    .q-stepper__nav {
      padding-left: 12px;
    }
  }
}

i {
  transition: transform .3s;
}

.translate {
  i {
    transition: transform .3s;
    transform: rotate(180deg);
  }
}
</style>