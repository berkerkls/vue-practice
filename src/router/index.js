import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home"
import FirstStep from "../views/FirstStep"
import FinalPage from "../views/FinalPage"
import UltraPage from "../views/UltraPage"
import ImprovedPage from "../views/ImprovedPage"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/ultra",
        name: "Ultra",
        component: UltraPage
    },
    {
        path: "/improved",
        name: "Improved",
        component: ImprovedPage
    },
    {
        path: "/firststep",
        name: "FirstStep",
        component: FirstStep
    },
    {
        path: "/final",
        name: "FinalPage",
        component: FinalPage
    }
]

const router =createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router