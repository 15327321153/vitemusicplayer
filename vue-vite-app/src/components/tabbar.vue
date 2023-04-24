<template>
  <el-aside class="aside">
    <div class="logobox">
      <img class="logo" src="../assets/logo.jpg" alt="" />
    </div>
    <div class="barbox">
      <div
        :class="item.click"
        v-for="(item, index) in data"
        @click="changber(index)"
        :key="item.icon"
      >
        <svg class="icon" aria-hidden="true">
          <use
            :xlink:href="`#icon-${
              item.click === 'baritem' ? item.icon : item.clickIcon
            }`"
          ></use>
        </svg>
        <div class="bar-text">{{ item.text }}</div>
      </div>
    </div>
  </el-aside>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

type tabtpye = {
  text: string;
  icon: string;
  click: string;
  clickIcon: string;
  router: string;
};

const { data } = defineProps<{
  data: tabtpye[];
}>();

const changber = (indexs: number) => {
  data.forEach((item, index) => {
    if (indexs === index) {
      item.click = "baritem-click";
      router.push(item.router);
    } else {
      item.click = "baritem";
    }
  });
};
</script>

<style lang="less" scoped>
.aside {
  width: 300px;
  .logobox {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .logo {
      width: 150px;
      margin: 50px 0;
      border-radius: 10px;
    }
  }
  .barbox {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    width: 300px;
    .baritem {
      height: 40px;
      width: 200px;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .icon {
        background-color: #fff;
        padding: 3px 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.5);
      }
      .bar-text {
        margin: 0 0 0 10px;
        color: #747474;
      }
    }
    .baritem-click {
      height: 40px;
      width: 200px;
      border-radius: 10px;
      background-color: #fff;
      padding: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      box-shadow: 0px 0px 10px 0px rgba(143, 143, 143, 0.5);
      .icon {
        background-color: rgb(250, 50, 80);
        padding: 3px 10px;
        border-radius: 5px;
      }
      .bar-text {
        margin: 0 0 0 10px;
      }
    }
  }
}
</style>
