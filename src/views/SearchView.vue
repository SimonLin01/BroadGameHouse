<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>
                <h1>所有遊戲</h1>
                </p>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div class="col mb-5" v-for="item in list.Home" :key="item.id">
                                <CardDiv :ing="item"></CardDiv>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-md-12">
                <p>
                <h1>桌遊週邊</h1>
                </p>
                
            </div>
        </div>
    </div>
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

        for (let i = 0; i < index.Home[i].img.length; i++) {
            console.log(index.Home[i].img[0]);
        }

        this.list = index;
    },
}
</script>
<style lang="">
    
</style>