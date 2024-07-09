<script setup lang="ts">

interface Props {
  preTitle: string
  title: string
  subtitle: string
}

const props = withDefaults(defineProps<Props>(), {
  preTitle: 'Pre-title goes here',
  title: 'Title goes here',
  subtitle: 'Subtitle goes here',

})

</script>

<template>
  <v-layout class="d-flex flex-column about-page" full-height>
    <!-- Banner -->
    <v-sheet color="black" width="100%" height="40vh" tile>
      <v-container class="d-flex justify-center align-center h-100">
        <v-sheet color="transparent" width="100%">
          <v-chip class="font-weight-bold" size="large" color="white">
            {{ props.preTitle }}
          </v-chip>

          <h2 class="mt-6 ml-2 text-h2">
            {{ props.title }}
          </h2>

          <p class="mt-6 ml-2">
            {{ props.subtitle }}
          </p>
        </v-sheet>
      </v-container>
    </v-sheet>
    <!-- Banner -->

    <!-- Content -->
    <v-container style="position: relative; top: -50px">
      <slot name="default" />
    </v-container>
    <!-- Content -->
  </v-layout>
</template>