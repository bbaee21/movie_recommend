<template>
    <div>
        <PhotoCapture v-model="imageBase64" />
    </div>
</template>

<script>
import {PhotoCapture} from 'vue-media-recorder'

export default {
    name: 'imageupload',
    data(){
        return {
            imageBase64: '',
        }
    },
    components:{
        PhotoCapture,
    }
}
</script>