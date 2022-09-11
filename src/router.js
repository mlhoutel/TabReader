import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./views/Home.vue"
import NotFound from "./views/NotFound.vue"
import About from "./views/About.vue"
import Import from "./views/Import.vue"
import Search from "./views/Search.vue"
import ComingSoon from "./views/ComingSoon.vue"

Vue.use(VueRouter)

const routes= [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/import",
    name: "Import",
    component: Import,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/docs",
    name: "Docs",
    component: ComingSoon,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
]

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/Tablatures/" : "/",
  mode: "hash",
  routes,
})

export default router
