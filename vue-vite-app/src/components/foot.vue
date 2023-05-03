<template>
  <div class="footbody">
    <el-slider v-model="data.value1" class="slider" :min="data.min" :max="data.max" />
    <div class="fa">
      
      <div class="img">
        <img src="../assets/logo.jpg" alt="">
      </div>
      <div class="title">
        <span class="name">认真的雪</span>
        <span class="airname">薛之谦</span>
      </div>
      <div class="time">
        00：00/03：24      
      </div>
      <div class="icons">
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-shangyiqu"
          ></use>
        </svg>

        
        <svg class="icon" aria-hidden="true" v-if="data.sope" @click="bofang">
          <use
            xlink:href="#icon-mv-red"
          ></use>
        </svg>

        <svg class="icon" aria-hidden="true"  v-else @click="bofang">
          <use
            xlink:href="#icon-sope"
          ></use>
        </svg>


        <svg class="icon" aria-hidden="true">
          <use
            xlink:href="#icon-xiayiqu"
          ></use>
        </svg>
      
      </div>

      <div class="shengying">

          <svg class="icon" aria-hidden="true"  v-if="data.jinyin.type" @click="jinying">
          <use
            xlink:href="#icon-yinliang"
          ></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else @click="jinying" >
          <use
            xlink:href="#icon-jinyin"
          ></use>
        </svg>


          <el-slider v-model="data.value1" class="slider" :min="data.min" :max="data.max" />

      </div>
      <div class="button">
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-xunhuanbofang"
          ></use>
        </svg>
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-geciweidianji"
          ></use>
        </svg>
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-list"
          ></use>
        </svg>
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-SmallWindow"
          ></use>
        </svg>
        <svg class="icon" aria-hidden="true"  >
          <use
            xlink:href="#icon-16gl-M"
          ></use>
        </svg>
      </div>

    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from "vue";




const data = reactive({
  value1: 0,
  max: 100,
  min: 0,
  sope:true,
  jinyin:{
    type:true,
    value:0
  },
  mp3: new Audio(" https://music.163.com/song/media/outer/url?id=164305610.mp3",
)
})

//静音功能
const jinying = ()=>{
if(data.jinyin.type){
  data.jinyin.value = data.value1
  data.value1 = 0
}else{
  data.value1 =data.jinyin.value
}
data.jinyin.type = !data.jinyin.type
}

const bofang = ()=>{
  //播放音乐
  let mp3 = new Audio('http://m7.music.126.net/20230504012403/761149d5bdb32a21feef13e15cdf79eb/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3') // 创建音频对象
mp3.loop = true
mp3.play() // 播放

  // data.sope = !data.sope
}


const setvalue = () => {
  setTimeout(() => {
    data.value1 = data.value1 + 1
    if (data.value1 < 1800) {
      setvalue()
    }
  }, 1000)
}
</script>

<style lang='less' scoped>
.footbody {
  background-color: #ffffff;

  height: 70px;

  .slider {
    height: 5px;
  }
  .fa{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 1300px;
    margin: 0 auto;
    .img{
      width: 48px;
      height: 48px;
      margin: 10px 0;

      img{
        width: 100%;
        border-radius: 4px;
      }
    }
    .title{
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      margin: 15px 0;
      .name{
        font-size: 12px;
        font-weight: 700;
      }
      .airname{
        font-size: 12px;
        color: #999;
      }
    }
    .time{
      line-height: 60px;
      font-size: 14px;
      color: #606266;

    }
    .icons{
      margin: 12px 0;
      .icon{
        cursor: pointer;
        width: 50px;
        margin: 0 25px;
      }
    }
    .shengying{
      width: 180px;
      display: flex;
      .icon{
        margin: 12px 10px;
        cursor: pointer;
      }
      .slider{
        margin: 25px 10px;
      }
    }
    .button{
      margin: 12px 0;
      .icon{
        margin: 0 10px;
        cursor: pointer;
      }
    }

  }
}
</style>