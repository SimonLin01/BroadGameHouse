<template>
<div class="signup_page">
    <div id="container2">

        <div class="signup">  
          
          <h3>會員註冊</h3>

          <form>
            <input type="text" id="fullname" name="fullname" placeholder="使用者全名" v-model="accountData.username" required>
            <div class="tab"></div>
            <input type="text" id="username2" name="username" placeholder="帳號" v-model="accountData.account" required>
            <div class="tab"></div>
            <input type="text" id="password2" name="password" placeholder="密碼" v-model="accountData.password" required>
            <div class="tab"></div>
            <input type="text" id="comfirm_password" name="comfirm_password" placeholder="確認密碼" required>
            <div class="tab"></div>            
            <input type="submit" value="註冊" class="submit">
          </form>  
          <RouterLink to="/login">
          <h5>登入帳號</h5>
          </RouterLink>
        </div><!-- signup end-->
      </div><!-- container2 end-->
    </div><!-- signup_page end--> 
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
    username: '',
    account: '',
    password: '',
})
async function login(event) {
    if (!form.value.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }else{
        const BGD = await axios.post(accountAPI("signup"), {
            username: accountData.value.username,
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
            console.log(BGD.data.data);
            
        }else{
            console.log(BGD.data.message);
        }
        console.log(BGD);
    }
    form.value.classList.add('was-validated')
}
</script>
<style lang="scss" scoped>
    *{
  font-family:微軟正黑體;  
}

body{
  background-color: white;
}

#username, #password, h3, #fullname, #comfirm_password,#username2, #password2{
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #df5334;
}

h5{
  margin: 20px;
  color: #a3a2a3;
}

h5:hover{
  color: black;
}

#container1, #container2{
  //margin: 50px;
  padding: 10px;
  width: 230px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  border-top: 10px solid #df5334;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  //text-align:center;  
}

.system_name{
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  text-align:center; 
}

.submit{
  color: white;  
  background: #df5334;
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 0px;
}

.submit:hover{
  background: #db6937;
}

#container2{
  visibility: visible;   /*剛開始消失*/
  height: 350px;
}


#copyright{
  text-align: center;
  color: #a3a2a3;
  margin: -200px 0px 0px 0px;
  font-size: 14px;
}

input{
  padding: 5px;
  border: none; 
  border:solid 1px #ccc;
  border-radius: 5px;
}
</style>