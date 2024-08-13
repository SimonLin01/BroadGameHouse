<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <RouterLink to="/">
                    <li class="nav-item"><span class="nav-link" aria-current="page">返回首頁</span></li>
                </RouterLink>
                <RouterLink to="/member">
                    <li class="nav-item"><span class="nav-link">會員資訊</span></li>
                </RouterLink>
                <li class="nav-item"><span class="nav-link">商品資訊</span></li>
                <li class="nav-item"><span class="nav-link">訂單管理</span></li>
                <RouterLink to="/message">
                    <li class="nav-item"><span class="nav-link">留言板</span></li>
                </RouterLink>
            </ul>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>