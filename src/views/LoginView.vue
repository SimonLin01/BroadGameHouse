<template>
    <div class="system_name">
        <h2>會員登入</h2>
    </div>
    <div class="login_page">
        <div id="container1">

            <div class="login">


                <div class="container">
                    <h3>登入 Login</h3>
                    <form ref="form" action="用戶管理.php" class="row g-3 needs-validation" novalidate @submit.prevent="login">
                        <div class="col-md-10">
                            <label for="validationCustomUsername" class="form-label">帳號</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" required>
                                <div class="invalid-feedback">
                                    請輸入帳號。
                                </div>
                            </div>
                            <label for="validationCustomUsername" class="form-label">密碼</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" required>
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

let router = useRouter();
let form = ref();
function login(event) {
    if (!form.value.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }else{
        router.push("/");
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