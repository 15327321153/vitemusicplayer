<template>
  <tabs title="最新MV" :data="data.tabsdata" @switchs="onswitchs">
    <FancyButton> 
      <mvitemVue :data="data.mvlist"></mvitemVue>
    </FancyButton>
  </tabs>
</template>

<script lang="ts" setup>
import { reactive ,onMounted } from 'vue'
import tabs from '../../components/tabs.vue'
import mvitemVue from '../../components/mvitem.vue'
import {mvfirst} from '../../api/home'


const data = reactive({
  tabsdata:[
    {name:'全部'},
    {name:'内地'},
    {name:'港台'},
    {name:'欧美'},
    {name:'日本'},
    {name:'韩国'},
  ],
  mvlist :[]
})

const onswitchs = (index:number)=>{
data.tabsdata.forEach((item,i)=>{
       if(index === i){
           item.class = 'tabclick'
       }else{
           item.class = 'tab'
       }
   })

   mvfirst(data.tabsdata[index].name === '全部' ? '':data.tabsdata[index].name).then(res=>{
      console.log(res)
      if(res.code === 200 ) data.mvlist = res.data
    })

   
}
onMounted(() => {
    onswitchs(0)
});

</script>

<style lang="less">

</style>