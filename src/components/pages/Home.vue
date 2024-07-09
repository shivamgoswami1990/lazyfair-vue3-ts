<script setup lang="ts">
import {onMounted} from "vue";
import { useDisplay } from "vuetify";

// Store
import { useAppStore } from "@/stores/App";

const { width, height, xs } = useDisplay()

const appStore = useAppStore();
onMounted(() => {
  appStore.setAppBarVisibility(false)
})
</script>

<template>
  <v-responsive :width="width" :height="height">
    <!-- TODO: Add a fallback poster below    -->
    <video id="background-video" width="100%" height="100%" autoplay loop playsinline muted poster="">
      <source src="@/assets/video/home-background.mp4" type="video/mp4">
    </video>

    <v-sheet id="background-video-overlay" class="d-flex flex-column justify-center align-center"
             width="100%" height="100%" color="transparent" :style="{ 'font-size': xs ? '25vw' : '12vw' }">
      <h1>Lazyfair.</h1>
      <v-btn class="text-primary text-lowercase" variant="text" size="x-large" :to="{ name: 'Crossroads' }">
        Enter
      </v-btn>
    </v-sheet>
  </v-responsive>
</template>