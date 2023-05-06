<template>
  <div class="footbody">
    <el-slider
      v-model="store.$state.time"
      class="slider"
      :min="0"
      :max="store.$state.maxtime"
      @change="changslider"
    />
    <div class="fa">
      <div class="img">
        <img :src="store.getmp3().songitem?.al?.picUrl" alt="" />
      </div>
      <div class="title">
        <span class="name">{{ store.getmp3().songitem.al?.name }}</span>
        <span class="airname"><span v-for="itema in store.getmp3().songitem.ar">{{ itema.name }}</span></span>
      </div>
      <div class="time">{{ formatTime(store.$state.time/1000) }}/{{ formatTime(store.$state.maxtime/1000) }}</div>
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
        <svg class="icon" aria-hidden="true" @click="test">
          <use xlink:href="#icon-16gl-M"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { computed, onMounted, reactive } from "vue";
import {useTop} from '../store/index'
import{formatTime} from '../utils/uitlis' 
const store = useTop()
const data = reactive({

});


const changslider = () =>{
  store.changslider()
}




</script>

<style lang="less" scoped>
.footbody:hover {
  animation-name: moveDown;
  animation-duration: 2s;
  animation-iteration-count: infinite; 
}
@keyframes moveDown {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 50px;
  }
  100% {
    margin-top: 0;
  }
}
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
