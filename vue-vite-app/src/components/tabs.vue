<template>
  <el-card class="box-card">
    <h2 class="title">{{ title }}</h2>
    <div class="fordiv" v-for="(item,index) in data" :key="index">
        <span :class="item.class?item.class:'tab'"  @click="switchs(index)">{{ item.name }}</span>
    </div>
    <div>
        <slot></slot>
    </div>
    
  </el-card>
</template>
<script lang="ts" setup>


type tabtpye = {
  name: string;
  id?: string;
  class ?: string
  type?:number
};

const { data ,title} = defineProps<{
    data: tabtpye[];
    title:string

}>();

const emit = defineEmits(['switchs'])

const switchs = (index:number) =>{

    emit('switchs', index);


}
</script>
<style lang="less" scoped>
.box-card{
    margin: 10px;
    border-radius: 20px;
    .title{
        display: inline-block;
        margin: 0 20px 0 0 ;
    }
    .fordiv{
        display: inline-block;
        .tab{
        margin: 0 20px;
        cursor:pointer;
    }
    .tabclick{
        margin: 0 20px;
        cursor:pointer;
        font-weight: 600;
        border-bottom:2px solid red; 
    }
    }
    
}

</style>
