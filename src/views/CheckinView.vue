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
            <form ref="form" class="row g-3 needs-validation mt-3 mb-3 text-same" novalidate @submit.prevent="mail">
                <div v-if="mails === 'mailsout'">
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom04" class="form-label">寄送地點</label>
                        <input type="text" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入地址
                        </div>
                    </div>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom04" class="form-label">姓名</label>
                        <input type="text" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入姓名
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg mt-3" type="submit">確認送出</button>
                </div>
                <div class="row align-items-center justify-content-between" v-if="mails === 'card'">
                    <h3>請選擇付款方式</h3>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom03" class="form-label">信用卡卡號</label>
                        <input type="text" class="form-control" id="validationCustom03" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入信用卡卡號
                        </div>
                    </div>
                    <div class="col-md-12">有效期限</div>
                    <div class="col-md-6 align-self-center">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>年份</option>
                            <option value="1">2024年</option>
                            <!-- <option value="2">Two</option>
                        <option value="3">Three</option> -->
                        </select>
                    </div>
                    <div class="col-md-6 align-self-center">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>月份</option>
                            <option value="1">6月</option>
                            <option value="2">7月</option>
                            <option value="3">8月</option>
                        </select>
                    </div>
                    <h3>帳單資訊</h3>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom04" class="form-label">姓名</label>
                        <input type="text" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入姓名
                        </div>
                    </div>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom05" class="form-label">居住地</label>
                        <input type="text" class="form-control" id="validationCustom05" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入地址
                        </div>
                    </div>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom06" class="form-label">郵遞區號</label>
                        <input type="text" class="form-control" id="validationCustom06" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入郵遞區號
                        </div>
                    </div>
                    <div class="col-md-12 align-self-center">
                        <label for="validationCustom07" class="form-label">電話號碼</label>
                        <input type="text" class="form-control" id="validationCustom07" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入電話號碼
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg mt-3" type="submit">確認送出</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let mails = ref("");
let form = ref();
let router = useRouter();
function mail(event) {
    if (!form.value.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    } else {
        router.push("/Checkout");
    }
    form.value.classList.add('was-validated')
}
</script>
<style lang="scss" scoped>
.text-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.text-same {
    width: 100%;
    max-width: 540px;
    margin: auto;
}
</style>