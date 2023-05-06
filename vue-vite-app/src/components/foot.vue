<template>
  <div class="footbody">
    <el-slider
      v-model="data.value1"
      class="slider"
      :min="data.min"
      :max="data.max"
    />
    <div class="fa">
      <div class="img">
        <img :src="store.getmp3().songitem?.al?.picUrl" alt="" />
      </div>
      <div class="title">
        <span class="name">{{ store.getmp3().songitem.al?.name }}</span>
        <span class="airname"><span v-for="itema in store.getmp3().songitem.ar">{{ itema.name }}</span></span>
      </div>
      <div class="time">00：00/03：24</div>
      <div class="icons">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiqu"></use>
        </svg>

        <svg class="icon" aria-hidden="true" v-if="store.$state.sope" @click="store.bofang">
          <use xlink:href="#icon-mv-red"></use>
        </svg>

        <svg class="icon" aria-hidden="true" v-else @click="store.bofang">
          <use xlink:href="#icon-sope"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayiqu"></use>
        </svg>
      </div>

      <div class="shengying">
        <svg
          class="icon"
          aria-hidden="true"
          v-if="store.getjy('type')"
          @click="store.jinying"
        >
          <use xlink:href="#icon-yinliang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else @click="store.jinying">
          <use xlink:href="#icon-jinyin"></use>
        </svg>

        <el-slider
          v-model="store.$state.shengying"
          class="slider"
          :min="0"
          :max="100"
          @input="store.changeshengying"
        />
      </div>
      <div class="button">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuanbofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-geciweidianji"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-list"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SmallWindow"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-16gl-M"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import {useTop} from '../store/index'
const store = useTop()
const data = reactive({
  value1: 0,

  max: 100,
  min: 0,

 

});



//静音功能


// const bofang = () => {
//   if(store.$state.sope){
//     data.mp3.play();
//   }else{
//     data.mp3.pause();
//   }
//   store.$state.sope = !store.$state.sope
// };
// data.jinyin.type = computed(()=>{
//   if(data.shengying>0){
//     return true
//   }else{
//     return false
//   }
// })
//音量调节


const setvalue = () => {
  setTimeout(() => {
    data.value1 = data.value1 + 1;
    if (data.value1 < 1800) {
      setvalue();
    }
  }, 1000);
};
</script>

<style lang="less" scoped>
.footbody {
  background-color: #ffffff;

  height: 70px;

  .slider {
    height: 5px;
  }
  .fa {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 1300px;
    margin: 0 auto;
    .img {
      width: 48px;
      height: 48px;
      margin: 10px 0;

      img {
        width: 100%;
        border-radius: 4px;
      }
    }
    .title {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      margin: 15px 0;
      .name {
        font-size: 12px;
        font-weight: 700;
      }
      .airname {
        font-size: 12px;
        color: #999;
      }
    }
    .time {
      line-height: 70px;
      font-size: 14px;
      color: #606266;
    }
    .icons {
      margin: 15px 0;
      .icon {
        cursor: pointer;
        width: 50px;
        margin: 0 25px;
      }
    }
    .shengying {
      width: 180px;
      display: flex;
      .icon {
        margin: 17px 10px;
        cursor: pointer;
      }
      .slider {
        margin: 30px 10px;
      }
    }
    .button {
      margin: 15px 0;
      .icon {
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
