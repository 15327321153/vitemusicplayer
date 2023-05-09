<template>
  <div class="common-layout" @mousemove="calculateDistance">
    <el-container>

      <tabbar :data="data"></tabbar>
      <el-main class="mian">
        <router-view></router-view>
      </el-main>
      <foot class="foot" :class="move" @el-child="changes"></foot>
    </el-container>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import tabbar from './components/tabbar.vue';
import foot from './components/foot.vue';

import { onMounted } from 'vue'
 
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', 'rgb(250,50,80)');

})


type tabtpye = {
  text:string,
  icon:string,
  click:string,
  clickIcon:string,
  router:string
}

const data = reactive<tabtpye[]>([{
  text:'主页',
  icon:'home',
  clickIcon:'home-click',
  router:'/',
  click:'baritem-click'
},{
  text:'排行榜',
  icon:'top',
  clickIcon:'top-click',
  router:'/top',
  click:'baritem'
},{
  text:'歌单',
  icon:'offer',
  clickIcon:'offer-click',
  router:'/offer',
  click:'baritem'
},{
  text:'MV',
  icon:'mv',
  clickIcon:'mv-click',
  router:'/mv',
  click:'baritem'
},{
  text:'歌手',
  icon:'my',
  clickIcon:'my-click',
  router:'/my',
  click:'baritem'
}])

const animate = reactive({
  class:'',
  distanceToBottom :0,
  suo:true
})

const calculateDistance = (event)=>{
  animate.distanceToBottom = window.innerHeight - event.clientY;
}
const changes = (bool)=>{
  animate.suo = bool
}

const move = computed(()=>{
  if(animate.class === 'move-up' && animate.distanceToBottom < 100) return
  if(animate.distanceToBottom < 100  && animate.suo ){ 
    return'move-up'
}else if(animate.distanceToBottom > 100 && animate.suo){
  return'move-down'
      

  }
})

</script>

<style lang="less" scoped>
.common-layout{
  // position: relative;
  .foot{
    position: fixed;
    width: 100%;
    z-index: 999;
    bottom: 0px;

  }
  .move-down {
  animation-name: slideDown;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  
}
.move-up{
  animation-name: slideUp;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

@keyframes slideUp {
  from {
    bottom: -65px;
  }
  to {
    bottom: 0;
  }
}
}

@keyframes slideDown {
  from {
    bottom: 0;
  }
  to {
    bottom: -65px;
  }
}

</style>
