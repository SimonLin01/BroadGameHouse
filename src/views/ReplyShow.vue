<template>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { useAccountStore } from '@/stores/account';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { adminAPI, setting } from '@/assets/js/function.js';

const { messageModify } = AdminHeadermessage();
const { tk } = storeTORefs(useAccountStore());

const tb_head = ['遊戲編號', '遊戲名稱', '遊戲圖片', '留言數'];
const tb_body = ref({});
const isdata = ref(true);

onMounted(async() => {
    const res = await axios.get(adminAPI("message", "showAllGameMessage")).catch((err) => {
        console.log(err);
    })
    if(!res){ return; }

    if (res.data.status == 200) {
        tb_body.value = res.data.data;
        isdata.value = true;
    }else{
        tb_body.value = res.data.message;
        isdata.value = false;
    }
})

/** 
@parem {object} id - 遊戲編號
*/

async function deleteMessage(id) {
    if(confirm("確定要刪除 ${id.name}嗎?")) {
        const res = await axios.post(adminAPI("message", "deleteGameMessage") + `?action=all`,{
            "game_id":id.game_id,
            "token": `Bearer ${tk.value}`,
            "id": true,
        },setting).catch((err) => {
            console.log(err);
        })
        if(res.data.status == 200) {
            tb_body.value = res.data.data;
        }else{
            alert(res.data.message);
        }
        console.log(res.data);
    }
}
</script>

<style lang>

</style>