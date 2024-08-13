<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import MenuNav1 from './components/MenuNav1.vue';
import MenuNav2 from './components/MenuNav2.vue';
import { useAccountStore } from './stores/account';
import { computed, watch } from 'vue';
const accountStore = useAccountStore();

const route = useRoute();
const isAdminHeader = computed(() => {
  return accountStore.isAdmin == 0 && route.path != "/";
})

</script>

<template>
  <div class="container">
    <MenuNav1 v-if="!isAdminHeader"></MenuNav1>

    <MenuNav2 v-else="isAdminHeader"></MenuNav2>
  </div>
  

  <RouterView />
</template>

<style scoped>

</style>
