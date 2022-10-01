import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home"
import FirstStep from "../views/FirstStep"
import FinalPage from "../views/FinalPage"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
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