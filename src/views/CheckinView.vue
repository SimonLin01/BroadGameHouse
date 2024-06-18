<template>
    <div class="text-center text-middle">
        <h2>請選擇付款方式</h2>
        <div>
            <div>
                <button @click="mails = 'mailsout'" class="btn btn-primary btn-lg mt-3" type="button">貨到付款</button>
                <button @click="mails = 'CIS'" class="btn btn-danger btn-lg mt-3" type="button">超商代碼</button>
                <button @click="mails = 'card'" class="btn btn-success btn-lg mt-3" type="button">信用卡</button>
                <!-- <button @click="mails = 'ATM'" class="btn btn-warning btn-lg mt-3" type="button">ATM轉帳</button> -->
            </div>
            <div v-show="mails === 'mailsout'">
                <h3>寄送地點:</h3>
                <input type="text" class="form-control" placeholder="請輸入寄送地點">
                <h3>姓名:</h3>
                <input type="text" class="form-control" placeholder="請輸入姓名">
                <RouterLink to="/checkout">
                    <button class="btn btn-primary btn-lg mt-3" type="button">確認送出</button>
                </RouterLink>
            </div>
            <div v-show="mails === 'card'">
                <h3>請選擇付款方式</h3>
                <h4>信用卡卡號</h4>
                <input type="text" class="form-control" placeholder="請輸入信用卡卡號">
                <h4>有效期限</h4>
                <div class="col-md-12">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>年份</option>
                        <option value="1">2024年</option>
                        <!-- <option value="2">Two</option>
                        <option value="3">Three</option> -->
                    </select>
                </div>
                <div class="col-md-12">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>月份</option>
                        <option value="1">6月</option>
                        <option value="2">7月</option>
                        <option value="3">8月</option>
                    </select>
                </div>
                <h3>帳單資訊</h3>
                <h4>姓名</h4>
                <input type="text" class="form-control" placeholder="請輸入姓名">
                <h4>居住地</h4>
                <input type="text" class="form-control" placeholder="請輸入居住地">
                <h4>郵遞區號</h4>
                <input type="text" class="form-control" placeholder="請輸入郵遞區號">
                <h4>電話號碼</h4>
                <input type="text" class="form-control" placeholder="請輸入電話號碼">
                <RouterLink to="/checkout">
                    <button class="btn btn-primary btn-lg mt-3" type="button">確認送出</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    data() {
        return {
            mails: "",
        };
    },
    components: { RouterLink, RouterView }
}
</script>
<style lang="scss" scoped>
.text-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>