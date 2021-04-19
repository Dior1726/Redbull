<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    // Example of adding support for
    // <q-icon name="app:...." />
    // This includes support for all "icon" props
    // of Quasar components

    this.$q.iconMapFn = (iconName) => {
      
      if (iconName.startsWith('uil') === true) {
        return {
          cls: 'uil ' + iconName
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
