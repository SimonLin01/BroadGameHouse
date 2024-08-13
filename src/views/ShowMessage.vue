<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>留言板</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <MessageBoard :data="itemList"></MessageBoard>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import MessageBoard from '@/components/MessageBoard.vue';

const route = useRouter();
const router = useRouter();

const title = ref('');
const itemList = ref({});

</script>

<style lang>

</style>