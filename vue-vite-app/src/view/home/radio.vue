<template>
    <tabs title="热门电台">
        <FancyButton>
            <div class="radiobody">
                <div class="radio" v-for="item in data.data" :key="item.picUrl">
                    <div class="img">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="felt">
                        <div class="top">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-diantai"></use>
                            </svg>
                            <span class="name">{{ item.name }}</span>
                        </div>
                        <div class="explain">{{ item.copywriter }}</div>
                        <div class="bom">
                            <div class="number">共{{ item.programCount }}期</div>
                            <div class="count">订阅{{jisuan(item.subCount)  }}次</div>
                        </div>
                    </div>
                </div>

            </div>

        </FancyButton>
    </tabs>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import tabs from '../../components/tabs.vue'
import {djhot} from '../../api/home'
const data = reactive({
    data:[]
})
const jisuan = (number)=>{
if(number>=10000){
    return (number/10000).toFixed(1)+'万'
}else{
    return number
}
}

onMounted(()=>{
    djhot().then(res=>{
        console.log(res)
        if(res.code === 200)data.data = res.djRadios.slice(0,6)
    })
})

</script>

<style lang="less" scoped>
.radiobody {
    padding: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    .radio {
        // border: 1px solid red;
        width: 49%;
        height: 100px;
        margin: 10px 0;
        display: flex;
        flex-flow: row nowrap;

        .img {
            height: 100%;
            display: inline-block;
            margin-right: 10px;

            img {
                height: 100%;
                border-radius: 4px;
            }
        }

        .felt {
            width: 70%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;

            .top {
                display: flex;
                .icon {
                    width:30px;
                }

                .name {
                    font-size: 18px;
                    line-height: 34px;
                }

            }

            .explain {
                font-size: 14px;
                color: #909090;
            }

            .bom {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                border-bottom: 1px solid #eee;

                .number {
                    font-size: 12px;
                    color: #999;
                }

                .count {
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }



}
</style>