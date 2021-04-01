<template>
  <q-page>
    <q-tabs
      class="full-width bg-accent-light text-white"
      v-model="tab"
      align="justify"
    >
      <q-tab
        label="Graphics"
        name="report"
        no-caps
      />
      <q-tab
        label="Insights"
        name="insights"
        no-caps
      />
    </q-tabs>
    <div>
      <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="report" class="q-pa-none">
            <div>
              <q-list class="q-px-md q-pt-md q-pb-sm">
                <p class="q-mb-sm q-px-md">Company A</p>
                <q-expansion-item>
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="md" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                      Kaspi USD *7598
                    </q-item-section>

                    <q-item-section side class="text-weight-bold text-dark">
                      600 000
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

                <q-expansion-item>
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="md" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                      Kaspi *7598
                    </q-item-section>

                    <q-item-section side class="text-weight-medium text-dark">
                      500
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

              <q-separator size="10px" color="grey-3"/>
              
              <q-list class="q-px-md q-pt-md q-pb-sm">
                <p class="q-mb-sm q-px-md">Company A</p>
                <q-expansion-item>
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="md" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                      Kaspi *7598
                    </q-item-section>

                    <q-item-section side class="text-weight-medium text-dark">
                      000
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

                <q-expansion-item>
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="md" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                      Kaspi *7598
                    </q-item-section>

                    <q-item-section side class="text-weight-medium text-dark">
                      000
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

              <q-separator size="10px" color="grey-3"/>
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
import dataJson from 'src/static/data.json'

  export default {
    data: () => ({
      tab: 'report',
      bi: dataJson
    }),
    mounted() {

    },
    computed: {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>

.q-expansion-item {
  border-top: 1px solid #e5e5e5;
}

.q-card__section--vert {
  padding-left: 73px;
}
</style>