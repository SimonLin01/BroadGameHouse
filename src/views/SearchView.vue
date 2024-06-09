<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="rounded-4 border warning mb-3">
                    <p class="badge bg-warning rounded-button-0 p-3 ms-4 fs-5">篩選結果</p>
                </h3>
                <div>
                    <span class="badge bg-danger fs-5 m-2" v-for="(item, index) in filterList" :key="index"
                        @click="filter(item)">{{ item }}
                        <button type="button" class="btn-close btn-close-white" aria-label="Close">
                        </button>
                    </span>
                </div>
            </div>
            <div class="col-md-12">
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
            filterList: [],
        }
    },
    created() {
    },
    methods: {
        showTag() {
            this.filterList = []
            Object.values(this.$route.query).forEach(item => {
                if (item !== 'all') {
                    if (item) {
                        this.filterList.push(item)
                    }
                }
            })
        }
    },
    async mounted() {
        const listURL = new URL("../assets/json/index.json", import.meta.url);
        const index = await fetch(listURL).then(res => res.json());

        for (let i = 0; i < index.Home[i].img.length; i++) {
            console.log(index.Home[i].img[0]);
        }

        this.list = index;
    },
    watch: {
        "$route": {
            handler: "showTag",
            deep: true
        }
    }
}
</script>
<style lang="">
    
</style>