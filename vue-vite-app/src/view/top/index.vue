<template>
  <div class="body">
    <div class="letf">
      <Topexplain></Topexplain>
      <tables></tables>
    </div>

    <toplists class="topbang" ></toplists>
  </div>
</template>

<script lang="ts" setup>
import Topexplain from './components/topexplain.vue';

import tables from './components/tables.vue'
import toplists from './components/toplist.vue'






</script>

<style lang="less" scoped>
.body {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  .letf {
    width: 100%;
  }

  .topbang {
    width: 470px;
    flex-grow: 0;
    flex-shrink: 0;
    // padding: 0 10px;
  }
}
</style>