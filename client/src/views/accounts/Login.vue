<template>
  <div class="container">
    <h1 class="my-5">Login</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div class="my-1">
      <label for="password">비밀번호: </label>
      <input type="password" id="password" 
        v-model="password"
        @keypress.enter="login"
      >
    </div>
    
    <div class="my-5">
      <h2>Face ID 사진을 넣어주세요</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%D7%94%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%9C_%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA_%D7%94%D6%BEFace_ID.jpg" alt="">
    </div>

    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      const data = {
        username: this.username,
        password: this.password
      }

      axios.post(`${SERVER_URL}/accounts/login/`, data)
        .then(res => {
          // console.log(res.data.token)
        let decoded = jwt_decode(res.data.token)
        const username = decoded.username
        this.$emit('login', username)

        localStorage.setItem('jwt', res.data.token)
        this.$router.push({ name: 'Home'})
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },

}
</script>
