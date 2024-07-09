import { createRouter, createWebHistory } from 'vue-router'
import MainTemplate from "@/components/templates/MainTemplate.vue";
import Home from "@/components/pages/Home.vue";
import Crossroads from "@/components/pages/Glossary.vue";
import About from "@/components/pages/About.vue";
import Work from "@/components/pages/Work.vue";
import Commercial from "@/components/pages/Commercial.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MainTemplate',
            component: MainTemplate,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/glossary',
                    name: 'Crossroads',
                    component: Crossroads
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About
                },
                {
                    path: '/work',
                    name: 'Work',
                    component: Work
                },
                {
                    path: '/commercial',
                    name: 'Commercial',
                    component: Commercial
                }
            ]
        }
    ],
})

export default router
