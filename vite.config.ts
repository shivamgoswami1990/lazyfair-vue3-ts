import Vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        Vue(),
        Vuetify({
            autoImport: true,
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
