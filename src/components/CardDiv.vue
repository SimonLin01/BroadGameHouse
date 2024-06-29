<template>
    <div class="card h-100" id="abgne_fade_pic">
        <!-- Product image-->
        <div :id="'carouselExampleControls' + thisCard.id" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item" v-for="(item, index) in thisCard.img" :key="index"
                    :class="[index == 0 ? 'active' : '']">
                    <img class="d-block w-100" height="150px" :src="item">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls' + thisCard.id"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls' + thisCard.id"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{ ing.name }}</h5>
                <!-- Product price-->
                {{ ing.price }}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
            <div class="text-center">
                <RouterLink :to="'/item?userID=' + thisCard.id"><span class="btn btn-outline-dark mt-auto">查看詳情</span>
                </RouterLink>
            </div>
            <div class="text-center">
                <!-- <RouterLink to="/cart"><span class="btn btn-outline-dark mt-auto">加入購物車</span></RouterLink> -->
                <Modal>加入購物車</Modal>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Modal from './Modal.vue';
export default {
    props: ["ing"],
    data() {
        return {
            thisCard: {},
        };
    },
    created() {
        this.thisCard = this.ing;
        const img = this.thisCard.img;
        console.log(this.ing);
        for (let i = 0; i < img.length; i++) {
            img[i] = new URL(`../assets/image/${img[i]}`, import.meta.url);
        }
    },
    components: { Modal }
}
</script>

<style></style>