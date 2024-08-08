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
  <div class="container">
    <MenuNav1></MenuNav1>
  </div>
  

  <RouterView />
</template>

<style scoped>

</style>
