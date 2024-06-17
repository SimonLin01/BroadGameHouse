import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import CheckedView from '../views/CheckedView.vue'
import CheckinView from '../views/CheckinView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'


const router = createRouter({
    // history: createWebHistory(
    //     import.meta.env.BASE_URL),
    history: createWebHistory(
        "/113-1-13"
    ),
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
        path: '/cart',
        name: 'Cart',
        component: CartView
    }, {
        path: '/checked',
        name: 'Checked',
        component: CheckedView
    }, {
        path: '/checkin',
        name: 'Checkin',
        component: CheckinView
    }, {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutView
    }, {
        path: '/login',
        name: 'Login',
        component: LoginView
    },{
        path: '/signup',
        name: 'Signup',
        component: SignupView
    }]
})

export default router