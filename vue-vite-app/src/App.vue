<template>
  <div class="common-layout">
    <el-container>
      <tabbar :data="data"></tabbar>
      <el-main class="mian">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import tabbar from './components/tabbar.vue';


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
.aside {
  width: 300px;
  .logobox {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .logo {
      width: 150px;
      margin: 50px 0;
      border-radius: 10px;
    }
  }
  .barbox {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    width: 300px;
    .baritem {
      height: 40px;
      width: 200px;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .icon{
        background-color: #fff;
        padding:3px 10px;
        border-radius: 5px;
        box-shadow:0px 0px 10px 0px rgba(143, 143, 143, 0.5)  ;

      }
      .bar-text{
        margin: 0 0 0 10px;
        color: #747474;
      }
      
    }
    .baritem-click {
      height: 40px;
      width: 200px;
      border-radius: 10px;
      background-color: #fff;
      padding: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      box-shadow:0px 0px 10px 0px rgba(143, 143, 143, 0.5)  ;
      .icon{
        background-color: rgb(250,50,80);
        padding:3px 10px;
        border-radius: 5px;

      }
      .bar-text{
        margin: 0 0 0 10px;

      }
      
    }
  }
}
</style>
