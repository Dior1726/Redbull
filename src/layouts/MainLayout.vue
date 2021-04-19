<template>
  <q-layout view="lHh lpR lFf">

    <q-header :class="[this.$route.name == 'ReportPage' ? 'bg-light text-dark' : 'bg-accent text-white']">
     <q-toolbar>
        <q-btn v-if="this.$route.meta.child" v-go-back.single flat icon="fas fa-arrow-left" size="sm" />
        
        <q-btn class="gt-xs" dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="absolute-center" style="font-weight: 600; font-size: 22px;">
          {{title}} 
        </q-toolbar-title>
        <q-space/>
        <q-select
          v-if="false"
          v-model="lang"
          :options="langOptions"
          dense
          borderless
          emit-value
          map-options
          color="accent"
          options-dense
          style="min-width: 50px"
        />
        <q-btn v-if="this.$route.name == 'Profile'" flat class="bg-accent-light" icon="uil-pen" size="md" />
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
        <q-item clickable v-ripple to="/" exact :class="{'q-router-link--active': this.$route.name == 'Projects'}">
          <q-item-section avatar>
            <q-avatar size="xl" text-color="grey-5" icon="uil-chart-bar" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/step">
          <q-item-section avatar>
            <q-avatar size="xl" text-color="grey-5" icon="uil-comment-lines" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/list">
          <q-item-section avatar>
            <q-avatar size="xl" text-color="grey-5" icon="uil-cube" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/user">
          <q-item-section avatar>
            <q-avatar size="xl" text-color="grey-5" icon="uil-user-circle" />
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
      left: false,
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'ru', label: 'Ru' },
        { value: 'kz', label: 'Kz' }
      ]
    }
  },
  mounted() {},
  computed: {
    title() {
      return this.$t(this.$route.name);
    }
  },
   watch: {
    lang(lang) {
      this.$i18n.locale = lang
    }
  }
}

</script>

<style lang="scss" scoped>
.q-toolbar__title {
  padding: 0;
}
.q-item {
  padding: 16px 8px;
}
.q-avatar {
  margin: 0 auto;
}
.q-item__section--side {
  padding-right: 0;
}

header {
  &::v-deep {
    .q-select__dropdown-icon {
      color: #fff;
    }

    .q-field__native {
      color: #fff;
    }
  }
}

.q-footer--bordered {
  border-color: #eee;
}

</style>
