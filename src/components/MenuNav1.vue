<template >
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">桌遊小屋</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <RouterLink to="/">
                        <li class="nav-item"><span class="nav-link" aria-current="page">首頁</span></li>
                    </RouterLink>
                    <!-- <RouterLink to="/about">
                        <li class="nav-item nav-link">關於</li>
                    </RouterLink> -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">所有商品</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink to="/allgame">
                                <li class="dropdown-item">所有遊戲</li>
                            </RouterLink>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <RouterLink to="/allgame?type=party">
                                <li class="dropdown-item">派對遊戲</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=strategy">
                                <li class="dropdown-item">策略遊戲</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=arena">
                                <li class="dropdown-item">陣營遊戲</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=heart">
                                <li class="dropdown-item">心機遊戲</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=horror">
                                <li class="dropdown-item">恐怖遊戲</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=detective">
                                <li class="dropdown-item">推理遊戲</li>
                            </RouterLink>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <RouterLink to="/allgame">
                                <li class="dropdown-item">桌遊週邊</li>
                            </RouterLink>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <RouterLink to="/allgame?type=item">
                                <li class="dropdown-item">遊戲配件</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=box">
                                <li class="dropdown-item">收納盒</li>
                            </RouterLink>
                            <RouterLink to="/allgame?type=pack">
                                <li class="dropdown-item">牌套</li>
                            </RouterLink>
                        </ul>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">好用週邊</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink to="/allgame">
                                <li class="dropdown-item">桌遊周邊</li>
                            </RouterLink>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <RouterLink to="/">
                                <li class="dropdown-item">遊戲配件</li>
                            </RouterLink>
                            <RouterLink to="/">
                                <li class="dropdown-item">收納盒</li>
                            </RouterLink>
                            <RouterLink to="/">
                                <li class="dropdown-item">牌套</li>
                            </RouterLink>
                        </ul>
                    </li> -->
                </ul>
                <form class="d-flex" v-if="!isLogin">
                    <RouterLink to="/login">
                        <button class="btn btn-outline-dark" type="submit">
                            登入
                        </button>
                    </RouterLink>
                </form>
                <form class="d-flex" v-else>
                    <button class="btn" type="button" @click="!showACC">
                        <img class="rounded-circle" src="../assets/image/7853767_kashifarif_user_profile_person_account_icon.png" width="50" height="50" alt="" srcset="">
                    </button>
                </form>
                <form class="d-flex">
                    <RouterLink to="/Cart">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            購物車
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </RouterLink>
                </form>
            </div>
        </div>
    </nav>

    <div class="position-absolute end-0 top-100" v-if="isLogin">
        <div class="bg-white tw-w-[10rem]" v-show="showACC">
            <RouterLink to="/MainAccount/Account" class="btn btn-outline-secondary btn-lg fw-bold w-100">
                個人帳號
            </RouterLink>
            <RouterLink to="/Admin/Admin" class="btn btn-outline-secondary btn-lg fw-bold w-100" v-if="isLogin.isAdmin == 0">
                管理後臺
            </RouterLink>
            <RouterLink to="/isLogout" class="btn btn-outline-secondary btn-lg fw-bold w-100">
                登出
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useAccountStore } from '@/stores/account';
import { ref, computed } from 'vue';

const accountStore = useAccountStore();
const isLogin = computed(() => {
    return accountStore.account;
})

const showACC = ref(false);
</script>
<style lang="scss" scoped>
.router-link-active {
    background-color: #b6d3f0;
}
</style>