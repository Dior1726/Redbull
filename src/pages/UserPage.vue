<template>
  <q-page class="">
    <div class="flex flex-center q-pa-md bg-accent column">
      <q-avatar size="50px" class="q-mb-sm shadow-accent">
        <img src="~assets/logos/LogoComp.svg">
      </q-avatar> 
      <div class="text-h6 text-white">
        Geometry
      </div>
      <div class="text-body1 text-grey-4 text-weight-light">
        Merey Nursultanov 
      </div>
    </div>
    <q-tabs
      class="full-width bg-accent-light text-white"
      v-model="tab"
      align="justify"
    >
      <q-tab
        label="Goals"
        name="m"
        no-caps
      />
      <q-tab
        label="Data"
        name="a"
        no-caps
      />
      <q-tab
        label="Team"
        name="b"
        no-caps
      />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="m">
        <q-list separator>
          <q-expansion-item 
            v-for="item in 5"
            :key="item"
          >
            <template v-slot:header>
              <q-item-section class="text-weight-bold">
                Account settings
              </q-item-section>
            </template>
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-list>
      </q-tab-panel>

      <q-tab-panel name="a">
        <div>
          <q-input label="Search" filled>
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <q-list class="q-my-md" separator>

          <q-item clickable v-ripple v-for="item in 5" :key="item" class="q-py-md">
            <q-item-section class="text-weight-bold">Rounded avatar-type icon</q-item-section>
            <q-item-section avatar>
              <q-avatar rounded size="md" color="grey-3" text-color="accent" icon="edit" />
            </q-item-section>
          </q-item>

        </q-list>
      </q-tab-panel>

      <q-tab-panel name="b">
        <div class="text-h6">Team</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  name: 'UserPage',
  data: () => ({
    tab: 'm'
  })
}
</script>

<style lang="scss" scoped>

// .q-list {
//   .q-expansion-item {
//     border-bottom: 1px solid #eee;
//   }
//   &::v-deep {
//     .q-expansion-item__container .q-item {
//       padding: 8px 0px;
//     }
//     .q-expansion-item__container .q-card__section {
//       padding: 8px 0px;
//     }
//   }
// }


</style>
