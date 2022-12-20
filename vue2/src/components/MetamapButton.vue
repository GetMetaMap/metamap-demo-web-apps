<script>
export default {
  data() {
    return {
      clientid: 'YOUR_CLIENT_ID',
      flowid: 'YOUR_FLOW_ID',
    };
  },
  mounted: function() {
    this.$refs.button.addEventListener('metamap:loaded', ({ detail }) => console.log('[METAMAP] Loaded', detail));
    this.$refs.button.addEventListener('metamap:userStartedSdk', ({ detail }) => console.log('[METAMAP] User started verification', detail));
    this.$refs.button.addEventListener('metamap:userFinishedSdk', ({ detail }) => console.log('[METAMAP] User finished verification', detail));
    this.$refs.button.addEventListener('metamap:exitedSdk', ({ detail }) => console.log('[METAMAP] User exited verification', detail));
  },
}
</script>
<template>
  <metamap-button
    ref="button"
    :clientid="clientid"
    :flowid="flowid">
  </metamap-button>
</template>
