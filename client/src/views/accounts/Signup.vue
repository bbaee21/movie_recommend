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
    <div class="my-5">
      <h2>Face ID 사진을 넣어주세요</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/%D7%94%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%9C_%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA_%D7%94%D6%BEFace_ID.jpg" alt="">
    </div>
    <ImageUpload/>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'
import ImageUpload from '@/components/accounts/ImageUpload'
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
    },
    components: {
      ImageUpload,
    },
}
</script>
