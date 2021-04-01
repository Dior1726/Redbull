<template>
  <q-page class="q-pa-md">
      <vue-step :length="6"></vue-step>
      <vue-step :length="6"></vue-step>
      <vue-step :length="6"></vue-step>
  </q-page>
</template>

<script>
import VueStep from 'src/components/VueStep'
export default {
  name: 'HomePage',
  components: {
    VueStep
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  }
}
</script>
