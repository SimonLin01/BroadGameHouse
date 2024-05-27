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
                <div class="col mb-5" v-for="item1 in list.Home" :key="item1.id">
                    <div class="card h-100" id="abgne_fade_pic">
                        <!-- Product image-->
                        <div id="carouselExampleControls01" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">

                                <div class="carousel-item" v-for="(item2, index2) in item1.img">
                                    <img :src="item2" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls01" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls01" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">爆炸貓</h5>
                                <!-- Product price-->
                                NT$60.00 - NT$80.00
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                            <div class="text-center"><RouterLink to='/item'><span class="btn btn-outline-dark mt-auto">查看詳情</span></RouterLink>
                            </div>
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">加入購物車</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">聯絡方式:123<img src="../assets/image/436169_phone_call_telephone_icon.png">07-0655881|<img src="../assets/image/4102577_applications_line_media_social_icon.png">DR.rick-roll</p>
        </div>
    </footer>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router';
export default {
    data() {
        return {
            list:{},
        }
    },
    created(){

    },
    async mounted(){
        const listURL = new URL("../assets/json/index.json", import.meta.url);
        const index = await fetch(listURL).then(res=> res.json());

        for(let i=0; i< index.Home[i].img.length; i++){
            console.log(index.Home[i].img[0]);
        }
        
        this.list = index;
    },
}
</script>
<style lang="">
  
</style>