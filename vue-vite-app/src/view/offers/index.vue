<template>
    <div class="body">
      <div class="letf">
        <Topexplain></Topexplain>
        <tables></tables>
      </div>
  
  
    </div>
  </template>
  
  <script lang="ts" setup>
  import Topexplain from '../../components/topexplain.vue';
  
  import tables from '../../components/tables.vue'
import { onMounted  } from 'vue';
import {useTop} from '../../store/index'
const store = useTop()

const data = defineProps<{
  id: string;
}>();


  


  onMounted(()=>{
    store.changeStateeTop(data,0)
  })
  
  
  
  
  </script>
  
  <style lang="less" scoped>
  .body {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  
    .letf {
      width: 100%;
    }
  
    .topbang {
      width: 470px;
      flex-grow: 0;
      flex-shrink: 0;
      // padding: 0 10px;
    }
  }
  </style>