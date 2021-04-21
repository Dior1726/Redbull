<template>
  <q-page class="q-pa-md">
    <q-card class="my-card q-mb-md bg-accent-light text-white">
      <q-card-section horizontal class="flex justify-around items-center q-pt-md">
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">
            Приветственный текст
          </div>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center ">
          <q-img src="~/assets/icons/homepage.svg" />
        </q-card-section>
      </q-card-section>
    </q-card>

    <div class="row justify-between q-gutter-md">
      <router-link
        tag="div" 
        class="my-card q-card"
        v-for="report in reports"
        :key="report.id"
        :to="{name: report.to}"
        :style="{'background': report.bgColor}"
      >
          <q-badge v-if="report.newMessage" color="orange" floating />
        <q-card-section class="flex items-center justify-center column full-height" style="font-weight: 500;font-size: 16px">
          <div class="bg-white card-round q-mb-sm" >
            <q-icon :class="report.icon" size="21px" :style="{'color': report.iconColor}" />
          </div>
          {{report.title}}
        </q-card-section>
      </router-link>
      <div
        class="my-card q-card"
        v-for="(item, i) in 6"
        :key="i+5"
      ></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ReportPage',
  data() {
    return {
      reports: [
        {
          title: 'Projects',
          id: 1,
          newMessage: true,
          to: 'Projects',
          icon: "uil-briefcase",
          iconColor: '#3FD1FF',
          bgColor: '#D9EFFF'
        },
        {
          title: 'Leads',
          id: 2,
          to: 'Leads',
          icon: "uil-smile",
          iconColor: '#F86F98',
          bgColor: 'rgba(238, 111, 186, 0.16)'
        },
        {
          title: 'Sales',
          id: 3,
          to: 'Sales',
          icon: "uil-arrow-growth",
          iconColor: '#FF934F',
          bgColor: 'rgba(255, 138, 91, 0.17)'
        },
        {
          title: 'Cash',
          id: 4,
          newMessage: true,
          to: 'Cash',
          icon: "uil-dollar-alt",
          iconColor: '#53CF3B',
          bgColor: 'rgba(80, 205, 62, 0.19)'
        }
      ]
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  flex-basis: 150px;
  min-height: 150px;
  flex-grow: 1;
  box-shadow: none;
  background: #F2F2F9;
}

.q-badge {
  width: 9px;
  height: 12px;
  border-radius: 10px !important;
  top: 10px;
  right: 10px;
}

.card-round {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
