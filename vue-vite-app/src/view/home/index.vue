<template>
  <div>
    <banana></banana>
    <PlayListHot></PlayListHot>
    <newList></newList>
    <topList></topList>
    <mv></mv>
    <div class="last">
      <radio></radio>
      <geshou style="width: 480px;flex-shrink:0;"></geshou>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import banana from "./banana.vue";
import PlayListHot from "./PlayListHot.vue";
import newList from "./newList.vue";
import topList from "./topList.vue";
import mv from './mv.vue'
import radio from "./radio.vue";
import geshou from './geshou.vue'
</script>

<style lang="less" scoped>
.last{
  display: flex;
}

</style>
