<template>
    <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">桌遊小屋</h1>
                <p class="lead fw-normal text-white-50 mb-0">致力於推廣桌遊，讓更多人喜歡桌遊</p>
            </div>
        </div>
    </header>
    <!-- Section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5" v-for="item in list.Home" :key="item.id">
                    <CardDiv :ing="item"></CardDiv>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">聯絡方式:<img
                    src="../assets/image/436169_phone_call_telephone_icon.png">07-0655881|<img
                    src="../assets/image/4102577_applications_line_media_social_icon.png">DR.rick-roll</p>
        </div>
    </footer>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router';
import CardDiv from "../components/CardDiv.vue";
export default {
    components: {
        CardDiv,
    },
    data() {
        return {
            list: {},
        }
    },
    created() {

    },
    async mounted() {
        const listURL = new URL("../assets/json/index.json", import.meta.url);
        const index = await fetch(listURL).then(res => res.json());


        this.list = index;
    },
}
</script>
<style lang="">
  
</style>