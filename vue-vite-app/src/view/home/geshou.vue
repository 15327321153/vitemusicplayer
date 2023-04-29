<template>
  <el-card class="box-card">
<h2 class="title">热门歌手</h2>
<el-carousel indicator-position="outside" height="360px">
    <el-carousel-item v-for="item in data.data" :key="item" class="item">
      <div class="img" v-for="items in item" :key="items.img1v1Url">
        <img :src="items.img1v1Url" alt="">
      </div>

    </el-carousel-item>
  </el-carousel>
  </el-card>

</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import {geshou} from '../../api/home'
const data  = reactive({
    data:[[],[],[],[]],

})

onMounted(()=>{
    geshou().then(res=>{
        if(res.code === 200){
            let index = 0
            res.artists.forEach(element => {
                data.data[index].push(element)
                if(data.data[index].length === 12) index++
            });

        }
   
})
})

</script>

<style lang="less" scoped>
.box-card{
    border-radius: 20px;
    margin: 10px;
   
    .title{
        display: inline-block;
        margin: 0 20px 0 0 ;
    }
    .item{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        .img{
        // border: 1px solid red;
        width: 24%;
        height: 30%;
        img{
            height: 100%;
            border-radius: 4px;
        }
    }
    }
    
}
</style>