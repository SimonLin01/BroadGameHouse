<template>
    <div class="container text-center text-middle">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <from>
                    <div class="row align-items-center justify-content-between" v-if="mails === 'CIS'">
                        <label for="validationCustom04" class="form-label">姓名</label>
                        <input type="text" class="form-control" id="validationCustom04" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入姓名
                        </div>
                        <label for="validationCustom04" class="form-label">手機號碼</label>
                        <input type="text" class="form-control" id="validationCustom08" aria-describedby="inputGroupPrepend"
                            required>
                        <div class="invalid-feedback">
                            請輸入手機號碼
                        </div>
                        <label for="validationCustom09" class="form-label">確認門市資訊</label>
                        <div class="col-md-6 align-self-center">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>縣市</option>
                                <option value="1">高雄市</option>
                                <option value="2">台南市</option>
                                <option value="3">台北市</option>
                                <option value="4">台中市</option>
                            </select>
                        </div>
                        <button class="btn btn-primary btn-lg mt-3" type="submit">確認送出</button>
                    </div>
                </from>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let mails = ref("CIS");
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