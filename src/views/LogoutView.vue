<template>
<div class="text-center text-middle">
    <h3>登出中...</h3>
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAccountStore } from '@/stores/account';

const accountStore = useAccountStore();
const router = useRouter();

function logout(time) {
    accountStore.tk = '';
    accountStore.account = '';
    setTimeout(() => {
        router.push('/');
    }, time);
}

logout(3000);
</script>

<style lang>

</style>