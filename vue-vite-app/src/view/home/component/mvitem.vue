<template>
  <div class="mvbody">
    <div class="mvitem" v-for="item in data" :key="item.cover">
      <div class="top">
        <img :src="item.cover" />

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mv-click"></use>
        </svg>
      </div>
      <div class="bom">
        <span class="title">{{ item.name }}</span>
        <span class="name">{{ item.artistName }}</span>
        <span class="bofanglang">

            <svg class="icons" aria-hidden="true" >
          <use xlink:href="#icon-mv"></use>
        </svg>
   
        <span class="number">{{ jisuan(item.playCount) }}</span> </span>
      </div>
    </div>
  </div>
</template>

<script  lang="ts" setup>

const { data } = defineProps<{
    data: any;
}>();

const jisuan = (number)=>{
if(number>=10000){
    return (number/10000).toFixed(1)+'万'
}else{
    return number
}
}

</script>

<style lang="less">
.mvbody {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 15px;
  .mvitem {
    width: 16%;
   
    height: 200px;
    margin: 10px 0;
    .top {
      height: 125px;
      background-color: rgb(245, 247, 250);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        height: 100%;
        right: 50%;
        transform: translateX(50%);
        z-index: 1;
        transition-property: height;
        transition-duration: 0.5s;
        transition-timing-function:linear;
      }
      .icon {
        position: absolute;
        width: 1px;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        z-index: 2;
        visibility: hidden;
        
        transition-property: width,visibility;
        transition-duration: 0.5s;
        transition-timing-function:linear;

      }
    }
    .bom{
        display: flex;
        flex-flow: column nowrap;
        margin-top: 10px;
        .title{
            font-size: 14px;
        }
        .name{
            font-size: 14px;
            color: #909090;

        }
        .bofanglang{
            position: relative;
            .icons{
                width: 16px;
                bottom: -84px;
                position: absolute;
            }
            .number{
                position: absolute;
                font-size: 14px;
                color: #909090;
                text-indent: 1em;
            }

          

        }

    }
  }
  .mvitem:hover {
    img {
        height: 125%;
    }
    .icon {
        visibility:visible;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
        width:46px;

    }

  }
}
</style>
