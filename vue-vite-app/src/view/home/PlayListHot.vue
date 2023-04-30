<template>
  <tabs :data="data.tabsData" :title="data.title" @switchs="onswitchs">
    <FancyButton> 
      <HotItem :listData="data.listData" :iscode="data.iscode"></HotItem>
    </FancyButton>
  </tabs>
</template>

<script lang="ts" setup>
import tabs from "../../components/tabs.vue";
import HotItem from "./HotItem.vue";
import { playlist ,hotplaylist } from "../../api/home";
import { onMounted, reactive } from "vue";

const data = reactive({
  tabsData: [],
  listData:[],
  title: "热门推荐",
  iscode:true
});

const onswitchs = (index:number)=>{
  data.iscode = true
 data.tabsData.forEach((item,i)=>{
        if(index === i){
            item.class = 'tabclick'
        }else{
            item.class = 'tab'
        }
    })

    hotplaylist(6,'hot',data.tabsData[index].name,0).then(res=>{
      data.iscode = false
      if(res.code === 200) data.listData = res.playlists
      console.log(res.playlists)
    })
    
}

onMounted(() => {
  playlist().then((res) => {
    if (res.code === 200) {
      
      data.tabsData = res.tags;
      
    }
  }).then(()=>{
    
    onswitchs(0)
  });
  
  hotplaylist(6,'hot','华语',0).then(res=>{
      if(res.code === 200) data.listData = res.playlists
    })
});
</script>

<style></style>
