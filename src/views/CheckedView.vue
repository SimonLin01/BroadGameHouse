<template>
    <div class="text-center">
        <h2>確認商品內容</h2>
        <p>確認金額:{{ total }}</p>
    </div>
    <div class="card mb-3" v-for="(item, index) in list" :key="index">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="item.img" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text"><small class="text-muted">NT${{ item.price }}</small></p>
                    <div class="d-flex">
                        <span class="mx-3">{{ item.count }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center">
        <h3>還有想買的商品:</h3>
        <div>
            <RouterLink to="/allgame">
                <button class="btn btn-success btn-lg mt-3" type="button">返回商城</button>
            </RouterLink>
            <RouterLink to="/checkin">
                <button class="btn btn-primary btn-lg mt-3" type="button">確認結帳</button>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            list: [{
                id: 1,
                name: "狼人殺",
                price: 60.00,
                img: "../assets/image/the-werewolves2.jpg",
                count: 1,
            }, {
                id: 2,
                name: "ROOT 茂林源記",
                price: 350.00,
                img: "../assets/image/root.jpg",
                count: 1,
            }]
        };
    },
    computed: {
        total() {
            let total = 0;
            this.list.forEach(item => {
                total += item.price * item.count;
            });
            return total;
        }
    },
    components: { RouterLink }
}
</script>
<style lang="">
    
</style>