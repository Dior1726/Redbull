<template>
  <q-page class="q-pa-md">

    <q-card class="my-card q-mb-md bg-accent text-white">
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
        v-for="item in arr"
        :key="item.id"
        :to="{name: item.to}"
      >
          <q-badge v-if="item.newMessage" color="orange" floating />
        <q-card-section class="flex items-center justify-center column text-h6 text-grey-8 full-height">
          <div class="bg-white card-round" >
            <q-icon :class="item.icon" size="md" color="accent" />
          </div>
          {{item.title}}
        </q-card-section>
      </router-link>
    </div>

    <!-- <q-card class="my-card">
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
      </q-card-section>
    </q-card> -->

  </q-page>
</template>

<script>
export default {
  name: 'ReportPage',
  data() {
    return {
      arr: [
        {
          title: 'Portfolio',
          id: 1,
          newMessage: true,
          to: 'Portfolio',
          icon: "uil-briefcase"
        },
        {
          title: 'Cash',
          id: 2,
          to: 'Cash',
          icon: "uil-dollar-alt"
        },
        {
          title: 'Sales',
          id: 3,
          to: 'Sales',
          icon: "uil-arrow-growth"
        },
        {
          title: 'Leads',
          id: 4,
          newMessage: true,
          to: 'Leads',
          icon: "uil-smile"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.my-card {
  flex-basis: 150px;
  min-height: 150px;
  flex-grow: 1;
  background: #F0F0F0;
  box-shadow: none;
}

.q-badge {
  width: 9px;
  height: 12px;
  border-radius: 10px !important;
  top: 10px;
  right: 10px;
}

.card-round {
  padding: 10px 12px;
  border-radius: 50%;
}
</style>
