<template>
  <div class="toplistbody">

    <carditemVue v-for="item in data.toplist" :topdata="item"></carditemVue>

  </div>
</template >

<script setup lang="ts">
import { reactive } from 'vue'
import {topall} from '../../api/home'
import carditemVue from './component/carditem.vue'
const data = reactive({
  toplist:[]
})

topall().then(res => {
  console.log(res)
  if(res.code === 200) data.toplist = res.list.slice(0,4)
})

</script>

<style lang="less" scoped>
.toplistbody{
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  padding: 12px;
}

</style>