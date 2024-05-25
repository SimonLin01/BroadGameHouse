<template >
       <!-- Navigation-->
       <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">桌遊小屋</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <RouterLink to="/"><li class="nav-item"><span class="nav-link active1" aria-current="page">首頁</span></li></RouterLink>
                    <li class="nav-item"><a class="nav-link" href="#!">關於</a></li>#!
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">遊戲類型</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">所有遊戲</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#!">派對遊戲</a></li>
                            <li><a class="dropdown-item" href="#!">策略遊戲</a></li>
                            <li><a class="dropdown-item" href="#!">陣營遊戲</a></li>
                            <li><a class="dropdown-item" href="#!">心機遊戲</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">好用週邊</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">桌遊周邊</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#!">遊戲配件</a></li>
                            <li><a class="dropdown-item" href="#!">收納盒</a></li>
                            <li><a class="dropdown-item" href="#!">牌套</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-dark" type="submit">
                        <i class="bi-cart-fill me-1"></i>
                        購物車
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router';
export default {
    
}
</script>
<style lang="">
    
</style>