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
        <q-list separator>
          <q-item-label header>Curator</q-item-label>
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="primary" text-color="white">
                <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Yerlan Adylkhanov</q-item-label>
              <q-item-label caption>Curator, Geometry</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list separator>
          <q-item-label header>Company A members</q-item-label>
          
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="primary" text-color="white">
                <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Galym Baibekov</q-item-label>
              <q-item-label caption>BI analyst</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar rounded size="md" color="grey-3" text-color="accent" icon="edit" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="primary" text-color="white">
                <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Aidos Utebaev</q-item-label>
              <q-item-label caption>BI analyst, financer</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar rounded size="md" color="grey-3" text-color="accent" icon="edit" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center">
              + Add a member
            </q-item-section>
          </q-item>
        </q-list>

        <q-list separator>
          <q-item-label header>Company B members</q-item-label>
          
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="primary" text-color="white">
                <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Galym Baibekov</q-item-label>
              <q-item-label caption>BI analyst</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar rounded size="md" color="grey-3" text-color="accent" icon="edit" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="primary" text-color="white">
                <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Aidos Utebaev</q-item-label>
              <q-item-label caption>BI analyst, financer</q-item-label>
            </q-item-section>

            <q-item-section avatar>
              <q-avatar rounded size="md" color="grey-3" text-color="accent" icon="edit" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section class="text-center">
              + Add a member
            </q-item-section>
          </q-item>
        </q-list>
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
.border-bottom {
  border-bottom: 1px solid #eee;
}
</style>
