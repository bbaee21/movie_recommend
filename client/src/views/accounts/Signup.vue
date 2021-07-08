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

      <PhotoCapture v-model="imageBase64" />
    </div>
    <h3 v-if="this.errorlog">
      <span>
        {{this.errorlog}}
      </span>
    </h3>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>

import axios from 'axios'
import {PhotoCapture} from 'vue-media-recorder'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      imageBase64: null,
      errorlog: '',
    }
  },
  methods: {
    // base64 를 blob형식으로 변환
    b64toblock: function() {
      // function b64toBlob(b64Data, contentType, sliceSize) {
        // , 뒷부분 imageBase64 받기
        const b64Data = this.imageBase64.split(',')[1];
        // 형식 지정
        const contentType = 'image/png'
        // 사이즈 지정
        const sliceSize = 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      blob.lastModifiedDate  = new Date()
      const imagename = this.username + '.png'
      // console.log(imagename)
      // blob 파일에 이름 넣기
      const file = new File([blob], imagename, {type: "image/png"})
      // console.log(file)
      return file
      // return blob;
      // }
    },

    signup: function () {
      // console.log(this.username, this.password, this.passwordConfirmation)
      const token = sessionStorage.getItem("token") // token을 세션에 저장시켜 사용했기 때문에
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data', // Content-Type을 변경해야 파일이 전송됨
          'Authorization': `token ${token}`
          }
      }
      let info = new FormData()
      info.append('username', this.username)
      info.append('password', this.password)
      info.append('passwordConfirmation', this.passwordConfirmation)
      info.append('imageBase64', this.b64toblock())

      // const data ={
      //   username: this.username,
      //   password: this.password,
      //   passwordConfirmation: this.passwordConfirmation,
      //   imageBase64: this.imageBase64,
      // }
      axios.post(`${SERVER_URL}/accounts/signup/`, info, config)
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'Login'})
        })
        .catch(err => {
          console.log(err.response)
          this.errorlog = '다른 아이디로 얼굴인식을 다시 시도해주세요.'
          })
    },
    // sendImages() {
    //   let info = new formData()
    //   info.append('imageBase64', this.imageBase64)
    //   if (this.imageBase64===null) {             // 파일을 보내지 않을 경우
    //     info.append('imageBase64', [])
    //   } else {
    //     for (let i = 0; i < this.imageBase64.length; i++) {   // 파일이 하나 이상인 경우
    //       info.append('imageBase64', this.imageBase64[i]);
    //     }
    //   }
    //   const token = sessionStorage.getItem("token") // token을 세션에 저장시켜 사용했기 때문에
    //   let config = {
    //     headers: {
    //       'Content-Type': 'multipart/form-data', // Content-Type을 변경해야 파일이 전송됨
    //       'Authorization': `token ${token}`
    //       }
    //   }
    //   axios.post(
    //     `${SERVER_URL}/accounts/signup/`, 
    //     info, config)
    //   .then((res) => {
    //     console.log(res) // 필요한 것 넣어서 쓰면됨
    //   })
    // }
  },
  components: {
    PhotoCapture,
  },
}
</script>
