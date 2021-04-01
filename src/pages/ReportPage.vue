<template>
  <q-page class="q-pa-md">
    <div class="row justify-between q-gutter-md">
      <router-link
        tag="div" 
        class="my-card q-card"
        v-for="item in arr"
        :key="item.id"
        :to="{name: item.to}"
      >
          <q-badge v-if="item.newMessage" color="orange" floating />
        <q-card-section class="absolute-center text-h6 text-grey-8">
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
          to: 'Portfolio'
        },
        {
          title: 'Cash',
          id: 2,
          to: 'Cash'
        },
        {
          title: 'Sales',
          id: 3,
          to: 'Sales'
        },
        {
          title: 'Leads',
          id: 4,
          newMessage: true,
          to: 'Leads'
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
</style>
