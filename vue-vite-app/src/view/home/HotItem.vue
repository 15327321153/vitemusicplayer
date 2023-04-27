<template>
  

  <div class="hotbody">

    <el-skeleton style="width: 15%;" v-for="item in 5"  animated v-if="iscode">
    <template #template>
      <el-skeleton-item variant="image" style="width: 100%; height: 320px;border-radius: 10px;" />
      <div style="padding: 14px 0">
        <el-skeleton-item variant="p" style="width: 50%" />
        <el-skeleton-item variant="text" style="margin-right: 16px" />
      </div>
    </template>
  </el-skeleton>
    
    <div class="hotitem" v-for="item in listData" :key="item.coverImgUrl"  v-else>
      <div class="top">
        <div class="imgdiv">
          <img :src="item.coverImgUrl" alt="" />
        </div>
        <div class="zx999">
          🎧47.1万/42首
        </div>
      </div>
      <div class="bom">
        <div class="title">{{item.name}}</div>
        <a href="#" v-for="(items,indexs) in item.tags" :key="indexs">#{{ items }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { listData,iscode } = defineProps<{
  listData: any;
  iscode:boolean;
}>();

</script>

<style lang="less" scoped>
.hotbody {
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-around;
  margin: 20px 0 0 0;

  .hotitem {
    width: 15%;

    .top {
      width: 100%;
      position: relative;
      padding-top: 100%;

      .imgdiv {
        position: absolute;
        top: 0;
        z-index: 1;

        img {
          width: 100%;
          border-radius: 6px;
        }
      }

      .zx999 {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 4;
        color: #fff;
        text-align: right;
        height: 30px;
        font-size: 14px;
        width: 50%;
        line-height: 30px;
        border-radius: 6px 6px 0 0;
        background-image: linear-gradient(to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.3));


      }
    }

    .bom {
      .title {
        margin: 5px;
        white-space:nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
      }

      a {
        color: rgb(250, 50, 80);
        margin: 5px;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}</style>
