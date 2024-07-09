import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, custom } from '@/iconsets/custom'
import '@/assets/scss/index.scss'

const theme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#F7EB61',
        secondary: '#EF4423',
        accent: '#E6E6E6',
        error: '#EF4423',
        info: '#2196F3',
        success: '#4E7200'
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'theme',
        themes: {
            theme
        },
    },
    icons: {
        defaultSet: 'custom',
        aliases,
        sets: {
            custom
        },
    }
})
