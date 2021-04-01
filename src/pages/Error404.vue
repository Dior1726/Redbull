<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center bg-accent">
    <div>
      <div style="font-size: 30vw">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="accent"
        unelevated
        to="/"
        label="Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
