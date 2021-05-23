<template>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="password">
    </div>
    <div>
      <label for="passwordConfirmation">비밀번호 확인: </label>
      <input type="password" id="passwordConfirmation" 
        v-model="passwordConfirmation"
        @keypress.enter="signup"
      >
    </div>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
    }
  },
  methods: {
    signup: function () {
      // console.log(this.username, this.password, this.passwordConfirmation)
      const data ={
        username: this.username,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      }
      axios.post(`${SERVER_URL}/accounts/signup/`, data)
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'Login'})
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>
