<template>

  <mvitemVue :data="data.mvlist"></mvitemVue>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import mvitemVue from '../../components/mvitem.vue'
import {mvfirst} from '../../api/home'
const data = reactive({
  mvlist:[]
})

const init = ()=>{
  mvfirst('',36).then(res=>{
      console.log(res)
      if(res.code === 200 ) data.mvlist = res.data
    })
}
onMounted(()=>{
  init()
})
</script>

<style lang="less">

</style>