<template>
    <el-card class="box-card">
        <h3 class="title">{{ topdata.name }}</h3>
        <span class="update">{{ topdata.updateFrequency }}</span>
        <ul class="list">
            <li class="listitem" v-for="item in data.listdata" :key="item.al.picUrl">
                <div class="lfte">
                    <img :src="item.al.picUrl" alt="">
                </div>
                <div class="right">
                    <div class="name">{{ item.name }}</div>
                    <div class="author"><span v-for="(items, i) in item.ar" :key="items.id">{{ items.name }}
                    {{ (i+1) === item.ar.lenght? '' : '/' }}</span></div>
                </div>

            </li>
        </ul>
    </el-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { detail } from '../../../api/home'

const { topdata } = defineProps<{
    topdata: any;
}>();

const data = reactive({
    listdata: []
})

detail(topdata.id).then(res => {
    if (res.code === 200) data.listdata = res.songs.slice(0, 6)
})

</script>

<style lang="less" scoped>
.box-card {
    width: 24%;
    border-radius: 10px;
    height: 600px;

    .update {
        font-size: 14px;
        color: #909090;
    }

    .list {
        padding: 10px 0;
        display: flex;
        flex-flow: column nowrap;
        list-style-type: none;
        justify-content: space-between;
        height: 430PX;

        .listitem {
            height: 11%;
            display: flex;

            .lfte {
                height: 100%;

                img {
                    height: 100%;
                    border-radius: 6px;
                }
            }

            .right {
                margin-left: 20px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                padding: 2px 0;

                .name {
                    font-size: 15px;
                    line-height: 20px;
                }

                .author {
                    font-size: 14px;
                    color: #909090;

                }

            }

        }

    }

}</style>