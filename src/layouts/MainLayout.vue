
<template>
  <q-layout view="lHh lpR lFf">

    <q-header class="bg-accent text-white">
     <q-toolbar>
        <q-btn v-if="this.$route.meta.child" v-go-back.single flat icon="fas fa-arrow-left" size="sm" />
        
        <q-btn class="gt-xs" dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="absolute-center">
          {{this.$route.name}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>


    <!--  Desktop Navbar   -->
    <q-drawer show-if-above v-model="left" side="left" bordered class="gt-xs">
      <div class="user-area bg-accent q-pa-lg row">
        <div class="col-8">
          <q-avatar size="70px">
            <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg" alt="">
          </q-avatar>
          <h6 class="text-white q-mt-sm q-mb-auto">Jonh Doe</h6>
          <p class="text-grey-4 q-mb-auto text-weight-light">john_doe@geometry.kz</p>
        </div>
        <div class="col-4 text-right">
          <q-btn icon="fas fa-cog" flat dense color="white" />
        </div>
      </div>

      <q-list class="q-pa-sm">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://image.freepik.com/free-vector/beard-man-avatar_96853-399.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>John Doe</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>User Name </q-item-section>
        </q-item>   

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar text-color="grey-5" icon="fas fa-plus" />
          </q-item-section>
          <q-item-section >Add account</q-item-section>
        </q-item>     
      </q-list>

      <q-list class="q-pa-sm">
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-avatar text-color="grey-5" icon="fas fa-home" />
          </q-item-section>
          <q-item-section >Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/user">
          <q-item-section avatar>
            <q-avatar text-color="grey-5" icon="fas fa-user" />
          </q-item-section>
          <q-item-section >Profile</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/step">
          <q-item-section avatar>
            <q-avatar text-color="grey-5" icon="far fa-chart-bar" />
          </q-item-section>
          <q-item-section >Report</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/list">
          <q-item-section avatar>
            <q-avatar text-color="grey-5" icon="fas fa-list" />
          </q-item-section>
          <q-item-section >List</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Container -->
    <q-page-container>
      <router-view />
    </q-page-container>


    <!--  Mobile Navbar   -->
    <q-footer bordered class="bg-grey-1 text-dark lt-sm ">
      <q-list class="flex justify-between">
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-avatar size="md" text-color="grey-5" icon="fas fa-home" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/step">
          <q-item-section avatar>
            <q-avatar size="md" text-color="grey-5" icon="far fa-chart-bar" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/list">
          <q-item-section avatar>
            <q-avatar size="md" text-color="grey-5" icon="fas fa-list" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/user">
          <q-item-section avatar>
            <q-avatar size="md" text-color="grey-5" icon="fas fa-user" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      left: false
    }
  },
}

</script>

<style lang="scss" scoped>
.q-toolbar__title {
  padding: 0;
}
.q-item {
  padding: 8px 4px;
}
.q-avatar {
  margin: 0 auto;
}
.q-item__section--side {
  padding-right: 0;
}
</style>
