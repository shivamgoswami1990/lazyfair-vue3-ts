<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useDisplay, useTheme } from "vuetify";

// Assets
import Logo from "@/assets/img/logo.webp"
import { IconChevronDown } from "@tabler/icons-vue";

// Store
import { useAppStore } from "@/stores/App";

const router = useRouter()
const route = useRoute()
const { xs } = useDisplay()
const theme = useTheme()
const primaryColor = theme.current.value.colors.primary
const appStore = useAppStore();
</script>

<template>
  <v-app class="rounded rounded-md">
    <!-- App navigation bar -->
    <v-app-bar v-if="appStore.getAppBarVisibility" color="black" height="60" tile flat>
      <v-img class="cursor-pointer" alt="Logo" max-height="90%" max-width="100"
             :src="Logo" @click="router.push({ name: 'Home'})" />

      <!-- Desktop nav items -->
      <template v-if="!xs" v-slot:append>
        <v-btn class="text-h5" height="100%" tile :to="{ name: 'About' }"
               :style="{ 'border-bottom': route.name === 'About' ? '2px solid ' + primaryColor : '' }">
          the artist
        </v-btn>

        <v-btn class="text-h5 ml-4" height="100%" tile :to="{ name: 'Work' }"
               :style="{ 'border-bottom': route.name === 'Work' ? '2px solid ' + primaryColor : '' }">
          work
        </v-btn>

        <v-btn class="text-h5 ml-4" height="100%" tile :to="{ name: 'Commercial' }"
               :style="{ 'border-bottom': route.name === 'Commercial' ? '2px solid ' + primaryColor : '' }">
          commercial work
        </v-btn>
      </template>
      <!-- Desktop nav items -->

      <!-- Mobile nav items -->
      <template v-if="xs" v-slot:append>
        <v-btn class="text-h5" height="100%" tile :to="{ name: 'About' }"
               :style="{ 'border-bottom': route.name === 'About' ? '2px solid ' + primaryColor : '' }">
          the artist
        </v-btn>

        <v-menu transition="slide-y-transition" location="bottom end" origin="auto" close-on-content-click >
          <template v-slot:activator="{ props }">
            <v-btn class="text-h5 mx-4" height="100%" tile v-bind="props"
                   :style="{ 'border-bottom': route.name !== 'About' ? '2px solid ' + primaryColor : '' }">
              work
              <icon-chevron-down class="ml-2" size="24" color="white" />
            </v-btn>
          </template>

          <v-list theme="dark" tile>
            <v-list-item>
              <v-list-item-title class="text-h5 pa-4" @click="router.push({ name: 'Work'})">
                personal
              </v-list-item-title>
              <v-list-item-title class="text-h5 pa-4" @click="router.push({ name: 'Commercial'})">
                commercial
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <!-- Mobile nav items -->


    </v-app-bar>
    <!-- App navigation bar -->

    <!-- Router view w/ transition -->
    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
    <!-- Router view w/ transition -->

    <!-- Footer -->
    <v-footer tile color="black">
      <v-container class="d-flex justify-space-between align-center" :class="xs ? 'flex-column' : ''">
        <span class="text-body-1 font-weight-bold" :class="xs ? 'pb-4' : ''">
          Disclaimer: Not Actually Lazy
        </span>

        <span class="text-body-1 font-weight-medium">Copyright © Sulaiman Enayatzada</span>
      </v-container>
    </v-footer>
    <!-- Footer -->

  </v-app>
</template>
