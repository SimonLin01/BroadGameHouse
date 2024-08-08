<template>
    <div class="system_name">
        <h2>會員登入</h2>
    </div>
    <div class="login_page">
        <div id="container1">

            <div class="login">


                <div class="container">
                    <h3>登入 Login</h3>
                    <form ref="form" class="row g-3 needs-validation" novalidate @submit.prevent="login">
                        <div class="col-md-12">
                            <label for="validationCustomUsername" class="form-label">帳號</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" v-model="accountData.account" required>
                                <div class="invalid-feedback">
                                    請輸入帳號。
                                </div>
                            </div>
                            <label for="validationCustomUsername" class="form-label">密碼</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" v-model="accountData.password" required>
                                <div class="invalid-feedback">
                                    請輸入密碼。
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="登入" class="submit">
                    </form>
                </div>

                <RouterLink to="/signup">
                    <h5>註冊帳號</h5>
                </RouterLink>
            </div><!-- login end-->
        </div><!-- container1 end-->
    </div><!-- login_page end-->
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAccountStore } from '../stores/account.js';
import axios from 'axios';
import { accountAPI } from '@/assets/js/function.js';

let router = useRouter();
let form = ref();
let accountStore = useAccountStore();

const accountData = ref({
    account: '',
    password: '',
})
async function login(event) {
    if (!form.value.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }else{
        const BGD = await axios.post(accountAPI("login"), {
            account: accountData.value.account,
            password: accountData.value.password
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).catch(error => {
            console.log(error)
        })
        if(BGD.data.status == 200){
            accountStore.account.token = BGD.data.data;
            router.replace("/");
            
        }else{
            console.log(BGD.data.message);
        }
        console.log(BGD);
    }
    form.value.classList.add('was-validated')
}
</script>
<style lang="scss" scoped>
h3 {

    color: #df5334;
}

h5 {
    margin: 20px;
    color: #a3a2a3;
}

h5:hover {
    color: black;
}

.login_page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.system_name {
    text-align: center;
}

.login {
    text-align: center;
}
</style>