<script setup lang="ts">
import {onMounted} from "vue";
import { useRouter } from 'vue-router'
import { useDisplay } from "vuetify";

// Store
import { useAppStore } from "@/stores/App";

const router = useRouter()
const { width, height, xs } = useDisplay()

const appStore = useAppStore();
onMounted(() => {
  appStore.setAppBarVisibility(false)
})
</script>

<template>
  <v-sheet class="d-flex" :class="xs ? 'flex-column' : 'flex-row'" :width="width" :height="height">
    <v-sheet class="d-flex justify-center align-center" color="primary" tile
             :width="xs ? '100%' : '50%'" :height="xs ? '50%' : '100%'">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <h4 class="text-h4 cursor-pointer" v-bind="props" :class="isHovering ? 'text-decoration-underline' : ''"
              @click="router.push({ name: 'Work'})">
            the art
          </h4>
        </template>
      </v-hover>
    </v-sheet>

    <v-sheet class="d-flex justify-center align-center" color="secondary" tile
             :width="xs ? '100%' : '50%'" :height="xs ? '50%' : '100%'">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <h4 class="text-h4 cursor-pointer" v-bind="props" :class="isHovering ? 'text-decoration-underline' : ''"
              @click="router.push({ name: 'About'})">
            the artist
          </h4>
        </template>
      </v-hover>
    </v-sheet>
  </v-sheet>
</template>