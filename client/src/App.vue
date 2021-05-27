<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="nav-link fs-3"  :to="{ name: 'Home'}">SBOX</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active fs-3" aria-current="page" href="#">랭킹</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-3" href="#">상영/예정작</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled fs-3" href="#" tabindex="-1" aria-disabled="true">콘텐츠</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-3"  :to="{ name: 'Community' }">커뮤니티</router-link>
            </li>
          </ul>

          <span class="navbar-nav" v-if="isLogin">
            <ul class="navbar-nav mx-5">
              <img class="nav-item" :src="profile" width="80px" height="60px" alt="">
              <li class="nav-item nav-link fs-3">{{ username }} 님</li>
              <li class="nav-item">
                <router-link class="nav-link fs-3"  @click.native="logout" :to="{ name: 'Home'}">Logout</router-link>
              </li>
            </ul>
          </span>
          <span class="navbar-nav" v-else>
          <ul class="navbar-nav mx-5">
            <li class="nav-item">
              <router-link class="nav-link fs-3" :to="{ name: 'Signup' }">회원가입</router-link> 
            </li>
            <li>
              <router-link class="nav-link fs-3" :to="{ name: 'Login' }">로그인</router-link> 
            </li>
          </ul>
          </span>
        </div>
      </div>
    </nav>
    <router-view @login="setLogin"/>
  </div>
</template>

<script>
// import jwt_decode from "jwt-decode"

import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
      username: '',
      movies: [],
      profile: '',
      userinfo: '',
      gender: '',
      age: '',
    }
  },
  methods: {
    logout: function () {
      // console.log('logout')
      this.isLogin = false
      localStorage.removeItem('jwt')
      // 다시 홈으로
      // this.$router.push({ name: 'Login' })
    },
    setLogin: function (username) {
      this.isLogin = true
      this.username = username
      this.profile = SERVER_URL+'/api/'+this.username+'.png'
      this.$store.dispatch('addCatImg')
      // router data 저장
      axios.get(`${SERVER_URL}/accounts/userinfo/?format=json`)
        .then((res) => {
          this.userinfo = res.data
          var step
          for (step = 0; step < this.userinfo.length; step++) {
            if (this.userinfo[step]['username'] === this.username) {
              this.age = this.userinfo[step]['age']
              this.gender = this.userinfo[step]['male']

              }
          }
          this.changekakao()
          this.$router.push({name: 'Home', params: {age: `${this.age}`, gender: `${this.gender}`}})
        })
        .catch((error) => {
          console.error(error)
        })
    },
    changekakao() {
      if (Number(this.age) > 20) {
        this.age = '성인'
        console.log(this.age);
      } else {
        this.age = '어린이'
      }
      
      if (Number(this.gender) > 0.5) {
        this.gender = '남성'
        console.log(this.gender);
      } else {
        this.gender = '여성'
      }
    }
  },
  created: function () {
    
    this.$router.push({name: 'Home', params: {age: `${this.age}`, gender: `${this.gender}`}})
    // console.log(accounts.image.url);
    // const token = localStorage.getItem('jwt')
    // if (token) {
    //   this.isLogin = true
    //   let decoded = jwt_decode(token)
    //   this.username = decoded.username
    // } else {
    //   this.isLogin = false

    
    
    }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>