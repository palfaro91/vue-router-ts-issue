<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import {defineComponent} from 'vue'

export default defineComponent({
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    console.log('pusher is valid ', this.$pusher)
    console.log('this route', this.$route.fullPath)
  }
})
</script>
