<template>
    <video-player ref="videoPlayer" :options="playerOptions" @play="onPlayerPlay"></video-player>
</template>

<script lang="ts" setup>
import { getmvurl } from "../../api/getMv";
import { reactive,ref ,watchEffect} from "vue";

const data = defineProps<{
    mvid: string;
}>();



const playerOptions = reactive({
    autoplay: false,
        controls: true,
        sources: [
          {
            src:'https://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
          },
        ],
})

watchEffect(() => {
      
    })
const init = () => {
    //getmvurl是一个请求后台的函数
    getmvurl(data.mvid).then((res) => {
       
            if(res.code === 200){
        
                playerOptions.sources[0].src = res.data.url
                $refs.player.load();
        }

       
        
     
    })
}
init()


// onMounted( ()=>{

//    playerOptions.sources[0].src = "http://vodkgeyttp8.vod.126.net/cloudmusic/MjQ3NDQ3MjUw/89a6a279dc2acfcd068b45ce72b1f560/533e4183a709699d566180ed0cd9abe9.mp4?wsSecret=90586a66b25126997896f810321e1892&wsTime=1683825146"
   
    
// })




const onPlayerPlay = () => {
    console.log("The player is playing");
    
};

</script>

<style lang="less" scoped></style>
