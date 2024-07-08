<template>
    <!-- Button trigger modal -->
    <button @click="showModal" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        加入購物車
    </button>

    <!-- Modal -->
    <div ref="myModalEl" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">已添加至購物車</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="../assets/image/Hanamikoji.jpg">
                    <p>花見小路</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <RouterLink to="/cart">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                            前往購物車
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let myModalEl = ref()

</script>

<style lang="scss" scoped></style>