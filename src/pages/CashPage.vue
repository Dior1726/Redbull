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
              <q-list separator class="q-px-md q-pt-md q-pb-sm" v-for="cash in cashList" :key="cash.id">
                <p class="q-mb-sm q-px-md" style="font-weight: 400; font-size: 14px;"> {{cash.name}} </p>
                <q-expansion-item v-for="child in cash.cashboxex" :key="child.id">
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-avatar size="24px" icon="fab fa-kaggle" color="red" text-color="white" />
                    </q-item-section>

                    <q-item-section style="color: #333; font-weight: 500;">
                      {{child.name}}
                    </q-item-section>

                    <q-item-section side style="font-weight: 600;color: #333">
                      {{child.amount.toLocaleString()}}
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
                        :rows-per-page-options="[10]"
                      >
                        <template v-slot:body="props">
                          <q-tr :props="props">
                            <q-td key="name" :props="props" :class="{'text-weight-medium':props.row.type == 'old'}">
                              {{ props.row.name }}
                            </q-td>

                            <q-td key="amount" :props="props">
                              <p v-if="props.row.type == 'income'" class="text-red">
                                {{ Number(props.row.amount).toLocaleString() }}
                              </p>
                              <p v-else-if="props.row.type == 'outcome'" class="text-green">
                                {{ Number(props.row.amount).toLocaleString() }}
                              </p>
                              <p v-else-if="props.row.type == 'old'" class="text-dark text-weight-medium">
                                {{ Number(props.row.amount).toLocaleString() }}
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
      cashList: cash,
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

.q-table tbody td {
  white-space: normal;
}

// .q-expansion-item {
//   border-top: 1px solid #e5e5e5;
// }

.q-card__section--vert {
  padding-left: 57px;
}

.q-item__section--side {
  color: #909090;
}
</style>