<template>
  <el-card class="box-card">
    <div class="item" v-for="(item, index) in data.listtitle" :key="index">
      <span class="title">{{ item.name }}</span>
      <span
        class="txt"
        :class="items.class ? items.class : ''"
        v-for="(items, indexs) in item.children"
        :key="indexs"
        @click="switchs(index, indexs)"
        >{{ items.name }}</span
      >
    </div>
  </el-card>
  <div class="offerbody">
    <h2 class="title">{{ data.title }}</h2>

    <svg class="icon" aria-hidden="true" @click="cuochakuai" v-if="data.title !=='全部歌单'">
          <use xlink:href="#icon-cuocha_kuai"></use>
    </svg>
  </div>
<Hotitem :listData="data.listData" :iscode="false"></Hotitem>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { catlist } from "../../api/offer";
import {hotplaylist} from '../../api/home'
import  Hotitem  from '../../components/HotItem.vue'
const data = reactive({
  listtitle: [],
  title:'全部歌单',
  listData:[]
});
const switchs = (index,indexs) => {
  data.listtitle.forEach(item=>{
    item.children.forEach(items=>{
      items.class = ''
    })
  })
  data.listtitle[index].children[indexs].class = 'click'
  data.title = data.listtitle[index].children[indexs].name

};
const cuochakuai = ()=>{
  data.title = '全部歌单'
}
const init = () => {
  catlist().then((res) => {
    if (res.code === 200) {
      for (const key in res.categories) {
        let item = {};
        item.index = key;
        item.name = res.categories[key];
        item.children = res.sub.filter((v) => v.category == key);
        data.listtitle.push(item);
      }
    }
  });
  hotplaylist(18).then(res=>{
    if (res.code === 200) {
      data.listData = res.playlists
      console.log(res)
    }
  })
};


onMounted(() => {
  init();
});
</script>

<style lang="less">
.box-card {
  border-radius: 20px;

  .item {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 25px;
    margin: 5px 0;
    // border-bottom: 1px solid #e7e7e7;
    .title {
      font-size: 14px;
      font-weight: 700;
      // width: 40px;
      padding: 0px 5px;
      text-align: center;
      line-height: 25px;
    }
    .txt {
      font-size: 14px;

      padding: 0px 5px;
      text-align: center;
      line-height: 25px;
      margin: 0 5px;
      cursor: pointer;
    }
    .click {
      font-size: 14px;

      color: #ffffff;

      background-color: rgb(250, 50, 80);
      border-radius: 4px;

    }
  }
}
.offerbody{
  .title{
    display: inline-block;
  }
  .icon{
    cursor: pointer;
  }
}
</style>
