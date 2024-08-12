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
// import CISView from '../views/CISView.vue'
import LogoutView from '../views/LogoutView.vue'

import { useAccountStore } from '../stores/account'
import axios from 'axios'
import { gameAPI, setting } from '@/assets/js/function.js'



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
    }, {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    }, {
        // path: '/cis',
        // name: 'CIS',
        // component: CISView
    }, {
        path: '/logout',
        name: 'Logout',
        component: LogoutView
    }],
})

router.beforeEach((to, from, next) => {

    const accountStore = useAccountStore();

    if (to.path !== "/signup") {
        next();
    }
    else { next() };
})


router.beforeEach((to, from, next) => {

    const accountStore = useAccountStore();

    if (to.path !== "/login") {
        next();
    }
    else { next() };
})

// router.beforeEach(async (to, from, next) => {

//     if (to.path == "item" || to.path == "/") {
//         let res = await axios.post(gameAPI("getGameId"), { "game_Id": to.query.gameId }, setting).catch((err) => console.log(err))
//         const data = res.data.data;
//         to.meta = {
//             ...to.meta,
//             title: data.name,
//             itemData: data,
//         }
//     }

//     document.title = `${to.meta.title || `桌遊小屋`}`;

//     const accountStore = useAccountStore();

//     accountStore.isAccountAdmin = 1;

//     if (to.path != "/logout") {

//         let UUID = accountStore.tk;
//         const checkLockin = await axios.post(getAccountAPI('checkAccount'),
//             {
//                 "token": `Bearer ${UUID}`
//             }, setting).catch((err) => {
//                 console.log(err)
//             });
//         if (checkLockin) {
//             if (checkLockin.data.status == 200) {
//                 accountStore.account = checkLockin.data.data.account;
//                 if (checkLockin.data.data.permission == 0) {
//                     accountStore.isAccountAdmin = 0;
//                     next();
//                 } else {
//                     to.meta.isAccountAdmin == "admin" ? next("/") : next();
//                 }
//             } else {
//                 accountStore.account = "";
//                 accountStore.tk = "";

//                 if (to.path != "/logout") {
//                     accountStore.isAccountAdmin = 2;
//                 }
//                 next();
//             }
//         }
//     }
//     else {
//         next();
//     }
// })

export default router