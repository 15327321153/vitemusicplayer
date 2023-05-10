<template>
  <div class="topexplainbody">
    <div class="img">
      <img :src="store.$state.all.coverImgUrl" alt="" />
    </div>
    <div class="explain">
      <el-card class="box-card">
        <div class="explain1">
          <h3 class="title">{{ store.$state.all.name }}</h3>
          <span class="update">{{ store.$state.data.updateFrequency }}</span>
        </div>
        <div class="explain2">
          <div class="minimg">
            <img :src="store.$state.all.creator?.avatarUrl" alt="" />
          </div>
          <span class="name">{{ store.$state.all.creator?.nickname }}</span>
          <span class="tiem">{{ timestampToDate(store.$state.all.createTime) }}</span>
        </div>
        <div class="explain3">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-erji1"></use>
            </svg>
            <div>
              <span>{{jisuan(store.$state.all.playCount)}}</span>
            </div>
          </span>
          <span>
            <svg class="icon" aria-hidden="true" style="width: 20px;">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
            <div>
              <span>{{jisuan(store.$state.all.subscribedCount)}}</span>
            </div>
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            <div>
              <span>{{jisuan(store.$state.all.commentCount)}}</span>
            </div>
          </span>
        </div>
        <h5 class="txttitle">歌单简介</h5>
        <div class="txt">
            {{ store.$state.all.description }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTop} from '../store/index'
const store = useTop()

const timestampToDate = (timestamp) =>{
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}


const jisuan = (number)=>{
if(number>=10000){
    return (number/10000).toFixed(1)+'万'
}{
    return number
}
}
console.log("{}",store.$state.all)

</script>

<style lang="less" scoped>
.topexplainbody {
  display: flex;
  height: 250px;
  width: 100%;
 

  .img {
    height: 100%;
    margin-right: 20px;
    img {
      height: 100%;
      border-radius: 12px;
    }
  }

  .explain {
    height: 100%;
    width: 100%;

    .box-card {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      border-radius: 12px;
      

      .explain1 {
        .title {
          font-size: 24px;
          display: inline;
        }

        .update {
          padding-left: 10px;
          font-size: 14px;
          line-height: 22px;
          color: #909090;
        }
      }

      .explain2 {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;

        .minimg {
          width: 32px;

          img {
            width: 100%;
            border-radius: 50%;
          }
        }

        .name {
          font-size: 14px;
          line-height: 32px;
          padding: 0 10px;
        }

        .tiem {
          font-size: 14px;
          line-height: 32px;
          color: #909090;
          padding: 0 10px;
        }
      }

      .explain3 {
        margin-bottom: 10px;
        .icon {
          width: 16px;
        }

        div {
          display: inline-block;
          position: relative;
          width: 100px;

          span {
            position: absolute;
            line-height: 16px;
            font-size: 14px;
            transform: translate(0, -155%);
            color: #909090;
          }
        }
      }
      .txttitle{
        font-size: 14px;
        line-height: 20px;
        display: inline;
        
      }
      .txt{
        font-size: 14px;
        color: #909090;
      }
    }
  }
}
</style>
