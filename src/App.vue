<script >
import { RouterLink, RouterView } from 'vue-router'
import MenuNav1 from './components/MenuNav1.vue';
export default {
components:{
  MenuNav1,
}
}
</script>

<template>
  <MenuNav1></MenuNav1>

  <RouterView />
</template>

<style scoped>

</style>
