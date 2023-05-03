<template>
  <div class="common-layout">
    <el-container>
      <tabbar :data="data"></tabbar>
      <el-main class="mian">
        <router-view></router-view>
      </el-main>
      <foot class="foot"></foot>
    </el-container>
    
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
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

</script>

<style lang="less" scoped>
.common-layout{
  // position: relative;
  .foot{
    position: fixed;
    width: 100%;
    z-index: 999;
    bottom: 0px;
    // left: -10px;
  }
}
</style>
