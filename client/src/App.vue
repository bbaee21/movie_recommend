<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="nav-link"  :to="{ name: 'Home'}">홈</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">랭킹</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">상영/예정작</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">콘텐츠</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'Community' }">커뮤니티</router-link>
            </li>
          </ul>

          <span class="navbar-nav" v-if="isLogin">
            <ul class="navbar-nav mx-5">
              <li class="nav-item">
                <router-link class="nav-link"  @click.native="logout" to="#">Logout</router-link>
              </li>
            </ul>
          </span>
          <span class="navbar-nav" v-else>
          <ul class="navbar-nav mx-5">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Signup' }">회원가입</router-link> 
            </li>
            <li>
              <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link> 
            </li>
          </ul>
          </span>
        </div>
      </div>
    </nav>


    <div v-if="isLogin">
      어서오세요 {{ username }} 님

    </div>
    <router-view @login="setLogin"/>
  </div>
</template>

<script>
// import jwt_decode from "jwt-decode"
// import axios from 'axios'


// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
      username: '',
      movies: [],
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
    },
  },
  created: function () {
    this.$router.push({name: 'Home'})
  
    // const token = localStorage.getItem('jwt')
    // if (token) {
    //   this.isLogin = true
    //   let decoded = jwt_decode(token)
    //   this.username = decoded.username
    // } else {
    //   this.isLogin = false

    
    
    // }
  }
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