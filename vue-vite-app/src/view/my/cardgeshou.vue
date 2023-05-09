<template>
  <div class="bodygeshou">
    <div class="img">
        <img :src="img" alt="">
    </div>
    <div class="explain">
    <div class="top">
        <span class="name">{{ name }}</span>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
    </div>
    <div class="number">
        <div class="item">
            <span class="title">
                专辑
            </span>
            <span class="value">
                {{ albumSize }}
            </span>
        </div>
        <div class="item">
            <span class="title">
                单曲
            </span>
            <span class="value">
                {{ musicSize }}
            </span>
        </div>
        <div class="item">
            <span class="title">
                粉丝
            </span>
            <span class="value">
                {{ jisuan(fansCount) }}
            </span>
        </div>
    </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {jisuan} from '../../utils/uitlis'
const { name,img,fansCount,albumSize,musicSize } = defineProps<{
  name: string;
  img:string;
  fansCount:number;
  albumSize:number;
  musicSize:number;
}>();
</script>

<style lang='less' scoped>
.bodygeshou:hover{
    background-image: linear-gradient(to bottom right, #ffffff, rgb(241, 106, 126));
    border-radius: 120px;
    
    .img{
        img{
            border-radius: 50px;
            margin: 10px 10px 10px 20px;
        }
    }
}
.bodygeshou{
    height: 120px;
    box-shadow: 0px 0px 20px 0px rgba(214, 214, 214, 0.5);
    display: flex;
    flex-flow: row nowrap;
    border-radius: 1px;
    transition:border-radius .5s ease-in;

    .img{
        img{
            margin: 10px;
            height: 100px;
            border-radius: 10px;

            transition:border-radius,margin .4s ease-in;
        }
    }
    .explain{
        width: 100%;
        .top{
            .name{
                font-size: 20px;
                font-weight: 500;
                margin: 20px;
            }
            .icon{
                width: 20px;
            }
        }
        .number{
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            justify-content: space-between;
            .item{
                margin: 20px;
                .title{
                    font-size: 12px;
                    color: #909090;
                    display: block;
                }
                .value{
                    font-size: 12px;
                    font-weight: 700;
                }

            }
        }
    }
}

</style>