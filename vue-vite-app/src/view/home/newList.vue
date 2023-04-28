<template>
  <tabs :data="data.tabsData" :title="data.title" @switchs="onswitchs" >
    <FancyButton> 
      <newListItem :data="data.newListData" :iscode="data.iscode"></newListItem>
    </FancyButton>
  </tabs>
</template>

<script lang="ts" setup>
import { reactive ,onMounted} from 'vue';
import tabs from '../../components/tabs.vue';
import newListItem from './newListItem.vue';
import {newlist}from '../../api/home'
const data = reactive({
    title:"新碟上架",
    tabsData:[{name:'全部',type:'all'},
    {name:'华语',type:'ZH'},
    {name:'欧美',type:'EA'},
    {name:'日本',type:'KR'},
    {name:'韩国',type:'JP'}],
    newListData:[],
    iscode:true
})

const onswitchs = (index:number)=>{
    data.iscode = true
data.tabsData.forEach((item,i)=>{
       if(index === i){
           item.class = 'tabclick'
       }else{
           item.class = 'tab'
       }
   })

   newlist(data.tabsData[index].type).then(res=>{
    data.iscode= false
        if(res.code === 200 ) data.newListData = res.monthData.slice(0,12)
    })



   
}


onMounted(() => {
    onswitchs(0)
    newlist().then(res=>{
        data.iscode= false
        if(res.code === 200 ) data.newListData = res.monthData.slice(0,12)
    })
});

</script>

<style lang="less">

</style>