<script setup lang="ts">
import {onMounted} from "vue";
import {useDisplay} from "vuetify";

// Template
import BannerTemplate from "@/components/templates/BannerTemplate.vue";

// Store
import {useAppStore} from "@/stores/App";

const {xs} = useDisplay()

const appStore = useAppStore();
onMounted(() => {
  appStore.setAppBarVisibility(true)
})
</script>

<template>
  <banner-template
      pre-title="Commercial work"
      title="My commercial work"
      subtitle="Write a subtitle here for commercial work"
  >
    <v-sheet class="d-flex" color="transparent" width="100%"
             :class="xs ? 'flex-column' : 'flex-row justify-space-evenly align-center'">

    </v-sheet>
  </banner-template>
</template>