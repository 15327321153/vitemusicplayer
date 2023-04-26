<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in data.bannerData" :key="item.imageUrl">
        <img class="itemimg" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { banner } from "../../api/home";
type bannerDataType = {
  imageUrl: string;
  encodeId: number;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
};
type resType = {
  banners: bannerDataType[];
  code: number;
};

// let bannerData = reactive<bannerDataType[]>([]);

const data = reactive({
  bannerData:[]
})

onMounted(() => {
  banner().then((res: resType) => {
    if (res.code === 200) {
      data.bannerData = res.banners;
    }

  });
  
});

</script>

<style lang="less">
.banner {
  width: 80%;
  margin: 0 auto;
  .itemimg {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}
</style>
