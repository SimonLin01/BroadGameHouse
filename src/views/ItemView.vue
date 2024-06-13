<template lang="">
    <div class="container">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <div :id="'carouselExampleIndicators' + useful.id" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" :data-bs-target="'#carouselExampleIndicators' + useful.id" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" :data-bs-target="'#carouselExampleIndicators' + useful.id" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(item, index) in useful.img" :key="index"
                                :class="[index == 0 ? 'active' : '']">
                                <img class="d-block w-100" height="150px" :src="item">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators' + useful.id" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators' + useful.id" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ useful.name }}</h5>
                        <hr>
                        <p class="card-text">{{useful.caption}}</p>
                        <p class="card-text">標籤：<a href="#">{{useful.gameTag}}</a></p>
                        <p class="card-text">遊戲說明：<a href="#">{{useful.rule}}</a></p>
                        <p class="card-text">價格：{{useful.price}}</p>
                        <RouterLink to="/cart">
                        <button class="btn btn-primary btn-lg">加入購物車</button>
                        </RouterLink>
                        <p class="card-text"><small class="text-muted">商品圖片井供參考，一切以實物為準</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-5">
            <div class="bg-white p-4 w-100 rounded-4">
                <p><h3>評論</h3></p>
                <div class=px-md-3>
                    <div class="d-flex align-item-start mt-2">
                        <img class="rounded-circle" src="../assets/image/7853767_kashifarif_user_profile_person_account_icon.png" width="50" height="50">
                        <div>
                            <div>
                                <p class="h4 ps-2 pt-2 fw-bolder">壹號</p>
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae voluptatibus unde voluptas labore doloremque temporibus omnis sequi expedita fuga ex, odit impedit eius molestias, culpa quidem explicabo. Dolores, obcaecati</p>
                                <div class="d-flex">
                                    <button type="button" class="btn">

                                    </button>
                                    <button type="button" class="btn">

                                    </button>
                                    <button type="button" class="btn">
                                        <span>回覆</span>
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-item-start mt-2">
                                <img class="rounded-circle" src="../assets/image/7853767_kashifarif_user_profile_person_account_icon.png" width="50" height="50">
                                <div>
                                    <p class="h4 ps-2 pt-2 fw-bolder">貳號</p>
                                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati adipisci nisi ipsam quis sint perspiciatis, praesentium aperiam neque consequuntur ab excepturi necessitatibus laudantium, vel minima ea voluptates asperiores vero?</p>
                                </div>
                            </div>
                        </div>                                           
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            useful: {

            }
        }
    },
    async created() {
        const Jdon = new URL('../assets/json/index.json', import.meta.url);
        await fetch(Jdon).then(res => res.json()).then(data => {
            let MayDay = data.Home.filter(item => item.id == this.$route.query.userID);
            for (let i = 0; i < MayDay[0].img.length; i++) {
                MayDay[0].img[i] = new URL(`../assets/image/${MayDay[0].img[i]}`, import.meta.url);
            }
            this.useful = MayDay[0];
        })
    },
    mounted() {

    }
}
</script>
<style lang="">
    
</style>