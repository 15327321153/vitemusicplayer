<template>
  <tabs :data="data.tabsData" :title="data.title" @switchs="onswitchs">
    <FancyButton> 
      <newListItem></newListItem>
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
    tabsData:[{name:'全部',type:0},
    {name:'华语',type:7},
    {name:'欧美',type:96},
    {name:'日本',type:8},
    {name:'韩国',type:16}],
    newListData:[]

})

const onswitchs = (index:number)=>{

data.tabsData.forEach((item,i)=>{
       if(index === i){
           item.class = 'tabclick'
       }else{
           item.class = 'tab'
       }
   })

//    hotplaylist(6,'hot',data.tabsData[index].name,0).then(res=>{
//      if(res.code === 200) data.listData = res.playlists
//    })
   
}


onMounted(() => {
    onswitchs(0)
    newlist().then(res=>{
        console.log(res)
    })
});

</script>

<style lang="less">

</style>