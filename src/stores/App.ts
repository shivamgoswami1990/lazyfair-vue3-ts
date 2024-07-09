import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useAppStore = defineStore('appStore', () => {
    // State
    const isAppBarVisible = ref(false)

    // Getters
    const getAppBarVisibility = computed(() => { return isAppBarVisible.value })

    // Setters
    function setAppBarVisibility(isVisible: boolean) {
        isAppBarVisible.value = isVisible
    }

    return { isAppBarVisible, setAppBarVisibility, getAppBarVisibility }
})
