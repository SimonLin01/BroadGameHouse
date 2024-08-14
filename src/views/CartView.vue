<template>
    <div class="text-center">
        <h1>購物車</h1>
        <p>商品確認</p>
    </div>
    <div v-show="list.length" class="card mb-3" v-for="(item, index) in list" :key="index">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="item.img" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text"><small class="text-muted">NT${{ item.price }}</small></p>
                    <div class="d-flex">
                        <button class="btn btn-outline-primary" type="button" @click="count++">+</button>
                        <span class="mx-3">{{ item.count }}</span>
                        <button class="btn btn-outline-danger" type="button" @click="decrement">-</button>
                    </div>
                    <button class="btn btn-primary mt-3" type="button" @click="remove(item.id)">移除商品</button>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center" v-show="list.length">
        <h3>總金額：NT${{ total }}</h3>
        <RouterLink to="/checked">
            <button class="btn btn-primary btn-lg mt-3" type="button">確認結帳</button>
        </RouterLink>
    </div>
    <div v-show="!list.length" class="text-center">
        <h3>這裡真是空曠</h3>
        <p>快去挑選新商品來填滿這裡</p>
        <RouterLink to="/allgame">
            <button class="btn btn-primary btn-lg" type="button">點這裡挑選新商品</button>
        </RouterLink>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router'


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
    methods: {
        decrement() {
            if (this.count <= 1) {
                this.count = 1;
            }
            else {
                this.count--;
            }
        },
        remove(id) {
            this.list = this.list.filter(item => item.id !== id);
        }
    },
    components: { RouterLink }
}
</script>
<style lang="">
    
</style>