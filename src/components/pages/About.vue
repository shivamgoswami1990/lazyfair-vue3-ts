<script setup lang="ts">
import {onMounted} from "vue";
import {useDisplay} from "vuetify";

// Assets
import {IconPhoneOutgoing, IconMailShare, IconBrandInstagram} from "@tabler/icons-vue";
import AboutImg from "@/assets/img/about.jpg";

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
      pre-title="About me"
      title="Sully"
      subtitle="Sully Enayatzada is an Afghan-Australian conceptual & editorial photographer +
       creative director based in Naarm (Melbourne)"
  >
    <v-sheet class="d-flex" color="transparent" width="100%"
             :class="xs ? 'flex-column' : 'flex-row justify-space-evenly align-center'">

      <v-sheet color="transparent" :width="xs ? '100%' : '40%'">
        <v-img class="rounded" alt="About me" :src="AboutImg"/>
      </v-sheet>

      <v-sheet color="transparent" :width="xs ? '100%' : '40%'">
        <v-card class="description-card" flat tile width="100%" height="100%">

          <v-card-text class="py-8 text-h6">
            <b class="d-block">Fashion Shortlist:</b>
            <p>
              Off White, Ettitude, Champion, HoMie, Hopeless Lingerie, Fred Perry Australia,
              Australian Stitch, Tres She, Joy Rich, Westside Apparel, Prime Athletic, , BSVII
            </p>

            <b class="d-block pt-4">Music Shortlist:</b>
            <p class="pb-4">
              Phi11a, Jerome Farah, Maya Hirasedo, Foura, Jesse Real, Adrian Eagle, Olivia Escuyos, Sophiya
            </p>

            <p class="d-flex align-center py-2">
              <icon-phone-outgoing class="mr-2" size="22"/>
              <a class="cursor-pointer text-decoration-underline" href="tel:0455810033">+61 455 810 033</a>
            </p>

            <p class="d-flex align-center py-2">
              <icon-mail-share class="mr-2" size="22"/>
              <a class="cursor-pointer text-decoration-underline" href="mailto:info@lazyfair.com.au">info@lazyfair.com.au</a>
            </p>

            <p class="d-flex align-center py-2">
              <icon-brand-instagram class="mr-2" size="24"/>
              <a class="cursor-pointer text-decoration-underline" href="https://www.instagram.com/lazyfair_/"
                 target="_blank" rel="noopener noreferrer">
                @lazyfair_
              </a>
            </p>
          </v-card-text>
        </v-card>
      </v-sheet>

    </v-sheet>
  </banner-template>
</template>