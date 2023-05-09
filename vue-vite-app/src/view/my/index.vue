<template>
  <div class="body">
    <cardgeshou
      class="item"
      v-for="item in data.geshoulist"
      :key="item.img1v1Url"
      :name="item.name"
      :img="item.img1v1Url"
      :fansCount="item.fansCount"
      :albumSize="item.albumSize"
      :musicSize="item.musicSize"
    ></cardgeshou>
  </div>
</template>

<script lang="ts" setup>
import cardgeshou from "./cardgeshou.vue";
import { onMounted, reactive } from "vue";
import { geshou } from "../../api/home";
const data = reactive({
  geshoulist: [],
});

const init = () => {
  geshou().then((res) => {
    console.log(res)
    if (res.code === 200) {
      data.geshoulist = res.artists;
    }
  });
};
onMounted(() => {
  init();
});
</script>

<style lang="less" scoped>
.body {
  display: flex;
  flex-flow: row wrap;

  .item {
    margin: 10px;
    width: 30%;
  }
}
</style>
