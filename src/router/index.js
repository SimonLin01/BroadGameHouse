import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import SearchView from '../views/SearchView.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/item',
        name: 'ItemView',
        component: ItemView
    }, {
        path: '/allgame',
        name: 'AllGame',
        component: SearchView
    }, {
        path: '/about',
        name: 'About',
        component: AboutView
    }]
})

export default router