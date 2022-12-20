<template>
  <div class="app">
    <MetamapButton />
  </div>
</template>

<script>
import MetamapButton from './components/MetamapButton.vue'
import Vue from 'vue'

Vue.config.ignoredElements = [
  'metamap-button',
]

export default {
  name: 'App',
  components: {
    MetamapButton
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
