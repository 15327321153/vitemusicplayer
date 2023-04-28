<template>
    <div class="newbody">
        <el-skeleton v-for="item in 12" animated class="lodingitem" v-if="iscode">
            
            <template #template>
                <el-skeleton-item variant="image" style="width:160px; height: 100%" />
                <div style="width: 100%;padding: 50px 20px;">
                    <el-skeleton-item variant="p" style="width: 50%" />
                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                </div>
            </template>
        </el-skeleton>


        <div class="newitem" v-for="item in data" :key="item.blurPicUrl"  v-else>
            <div class="left">
                <img :src="item.blurPicUrl" alt="">
            </div>
            <div class="right">
                <div class="title">{{ item.name }}</div>
                <div class="name">{{ item.company }}</div>
                <div class="tips">{{ item.type }}</div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
const { data ,iscode} = defineProps<{
    data: any;
    iscode:boolean;

}>();

</script>

<style lang="less" scoped>
.newbody {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 30px;

.lodingitem{
    width: 23%;
    height: 120px;
    display: flex;
    margin: 10px 0;
}

    .newitem {
        cursor: pointer;
        border-radius: 10px;
        width: 23%;
        height: 120px;
        margin: 10px 0;
        display: flex;
        background-color: rgb(240, 240, 240);

        .left {
            display: block;
            height: 100%;

            img {
                height: 100%;
                border-radius: 10px;
            }
        }

        .right {
            position: relative;
            flex: 2;
            overflow: hidden;

            .title {
                padding: 15% 20px 10px 20px;
                font-size: 16px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .name {
                font-size: 14px;
                color: rgb(61, 61, 61);
                padding: 0 20px 10px 20px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .tips {
                position: absolute;
                top: 5px;
                right: -30px;
                width: 100px;
                line-height: 24px;
                font-size: 12px;
                transform: rotate(45deg);
                text-align: center;
                color: #fff;
                background-color: rgb(250, 50, 80);

            }

        }

    }

    .newitem:hover {
        .title {
            color: rgb(250, 50, 80);
            padding: 15% 20px 10px 20px;
            font-size: 16px;
        }
    }
}</style>