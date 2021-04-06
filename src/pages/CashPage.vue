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
              <q-list separator class="q-px-md q-pt-md q-pb-sm" v-for="item in bi" :key="item.id">
                <p class="q-mb-sm q-px-md"> {{item.name}} </p>
                <q-expansion-item v-for="child in item.cashboxex" :key="child.id">
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="md" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section>
                      {{child.name}}
                    </q-item-section>

                    <q-item-section side class="text-weight-bold text-dark">
                      {{child.amount}}
                    </q-item-section>
                  </template>

                  <q-card>
                    <q-card-section>
                      <q-table
                        dense
                        flat
                        separator="none"
                        hide-bottom
                        hide-header
                        :data="child.discharge"
                        :columns="columns"
                        row-key="name"
                      >
                        <template v-slot:body="props">
                          <q-tr :props="props">
                            <q-td key="name" :props="props" :class="{'text-weight-medium':props.row.type == 'old'}">
                              {{ props.row.name }}
                            </q-td>

                            <q-td key="amount" :props="props">
                              <p v-if="props.row.type == 'income'" class="text-red">
                                - {{ props.row.amount }}
                              </p>
                              <p v-else-if="props.row.type == 'outcome'" class="text-green">
                                + {{ props.row.amount }}
                              </p>
                              <p v-else class="text-dark text-weight-medium">
                                {{ props.row.amount }}
                              </p>
                            </q-td>
                          </q-tr>
                        </template>
                      </q-table>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
              <!-- <q-separator size="10px" color="grey-3" /> -->
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
import cash from 'src/static/cash1.json'

  export default {
    data: () => ({
      tab: 'report',
      bi: cash,
      columns: [
        {
          name: 'name',
          required: true,
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        { name: 'amount', align: 'right', field: 'amount',},
      ],
      data: [
        {
          name: 'Zerde',
          amount: 2000,
          type: 'income'
        },
        {
          name: 'Dark',
          amount: 2000,
          type: 'outcome'
        },
        {
          name: 'Darks',
          amount: 2000,
          type: 'outcome'
        },
        {
          name: 'Before 7 day',
          amount: 5000,
          type: 'old'
        }
      ]
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

.q-table p {
  margin: 0;
}

// .q-expansion-item {
//   border-top: 1px solid #e5e5e5;
// }

.q-card__section--vert {
  padding-left: 73px;
}
</style>