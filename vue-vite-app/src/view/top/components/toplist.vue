<template>
    <div class="bodys">

        <div class="bar">
            <div class="baritem" :class="data.class[0]" @click="switchs('TOP榜')">TOP榜</div>
            <div class="baritem" :class="data.class[1]" @click="switchs('特色榜')">特色榜</div>
            <div class="baritem" :class="data.class[2]" @click="switchs('场景榜')">场景榜</div>
        </div>
        <br>
        <div class="con">
            <div class="item" :class="item.class" v-for="(item, index) in data.data" :key="item.coverImgUrl"
                @click="changes(index)">
                <div class="left">
                    <span class="name">{{ item.name }}</span>
                    <span class="update">{{ item.updateFrequency }}</span>
                </div>
                <div class="right">
                    <img :src="item.coverImgUrl" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'
import { toplist } from '../../../api/top'
import { useTop } from '../../../store/index'
const store = useTop()
console.log(store)
const data = reactive({
    data: [],
    listTop: [],
    listFeature: [],
    listOther: [],
    class:['','','']
})

const changes = (index) => {
    data.data.forEach((v, i) => {
        if (i === index) {
            v.class = 'item-click'
        } else {
            v.class = ''
        }
    })

    store.changeStateeTop(data.data[index], index)
    store.getindexs('set',0)
    
}
const switchs = (type) => {
    if (type === 'TOP榜') {
        data.data = data.listTop
        data.class[0]='baritem-click'
        data.class[1]=''
        data.class[2]=''

    } else if (type === '特色榜') {
        data.data = data.listFeature
        data.class[0]=''
        data.class[1]='baritem-click'
        data.class[2]=''
    } else {
        data.data = data.listOther
        data.class[0]=''
        data.class[1]=''
        data.class[2]='baritem-click'
    }
    changes(0)
    store.getindexs('set',0)

}

const init = async () => {
    const res = await toplist()

    // 云音乐TOP榜
    data['listTop'] = res.list.filter(item => {
        return item.ToplistType
    })
    // 云音乐特色榜
    data['listFeature'] = res.list.filter(item => {
        return !item.ToplistType && item.name.indexOf('云音乐') >= 0
    })
    // 其他场景榜
    data['listOther'] = res.list.filter(item => {
        return !item.ToplistType && item.name.indexOf('云音乐') < 0
    })
    switchs('TOP榜')
};






onMounted(() => {
    init()
    
})




</script>

<style lang='less' scoped>
.bodys {
    margin-left: 20px;


    .bar {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        height: 70px;

        .baritem {
            width: 120px;
            height: 50px;
            background-color: #ffffff;
            border-radius: 14px;
            box-shadow: 0 0 10px 0 rgba(143, 143, 143, 0.5);
            text-align: center;
            line-height: 50px;
            font-size: 14px;
            cursor: pointer;
            transition:color,background-color .2s ease-in;
        }
        .baritem-click{
            // transition:color .2s ease-in;
            background-color: rgb(240,50,80);
            color: #ffffff;
        }


    }

    .con {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        .item-click {
            background-image: linear-gradient(to bottom right, #ffffff, rgb(241, 106, 127));
        }

        .item {
            width: 215px;
            height: 62px;
            background-color: #ffffff;
            border-radius: 14px;
            box-shadow: 0 0 20px 0 rgba(196, 196, 196, 0.5);
            margin: 10px 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            cursor: pointer;

            .left {
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-evenly;
                margin-left: 20px;

                .name {
                    font-size: 14px;
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }

                .update {
                    font-size: 12px;
                    color: #909090;
                }
            }

            .right {
                width: 40px;
                height: 40px;
                margin-right: 20px;

                img {
                    margin-top: 11px;
                    height: 100%;
                    border-radius: 8px;
                    box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.3);

                }
            }

        }
    }
}</style>