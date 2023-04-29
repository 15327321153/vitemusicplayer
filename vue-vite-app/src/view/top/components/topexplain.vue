<template>
  <div class="topexplainbody">
    <div class="img">
      <img src="../../../assets/logo.jpg" alt="" />
    </div>
    <div class="explain">
      <el-card class="box-card">
        <div class="explain1">
          <h3 class="title">飙升榜</h3>
          <span class="update">(04月29日 更新)</span>
        </div>
        <div class="explain2">
          <div class="minimg">
            <img src="../../../assets/logo.jpg" alt="" />
          </div>
          <span class="name">网易云影月</span>
          <span class="tiem">2014-06-30</span>
        </div>
        <div class="explain3">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-my"></use>
            </svg>
            <div>
              <span>3000</span>
            </div>
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-my"></use>
            </svg>
            <div>
              <span>3000</span>
            </div>
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-my"></use>
            </svg>
            <div>
              <span>3000</span>
            </div>
          </span>
        </div>
        <h5 class="txttitle">歌单简介</h5>
        <div class="txt">
            asdasdsdasd
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
