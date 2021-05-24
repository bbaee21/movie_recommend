<template>
  <div class="container">
    <h1 class="my-5">Login</h1>
    <div>
      <label class="fs-3" for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div class="my-1">
      <label class="fs-3" for="password">비밀번호: </label>
      <input type="password" id="password" 
        v-model="password"
        @keypress.enter="login"
      >
    </div>
    <button class="fs-3 my-1" @click="login">Login</button>
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
