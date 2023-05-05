<template>
  <el-card class="box-card">
    <div class="hear">
      <div class="text">
        <span class="title">歌曲列表</span
        ><span class="number">{{ store.$state.all?.tracks?.length }}首歌</span>
      </div>
      <div class="but">
        <div class="bofang">
          <svg class="icon" aria-hidden="true" style="width: 20px">
            <use xlink:href="#icon-mv-click"></use>
          </svg>
          <div class="txt" @click="test">播放全部</div>
        </div>
        <div class="shouchang">
          <svg class="icon" aria-hidden="true" style="width: 20px">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <div class="txt">收藏</div>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="thear">
        <div class="sort heartxt">序号</div>
        <div class="songname heartxt">歌曲</div>
        <div class="airname heartxt">歌手</div>
        <div class="zuanji heartxt">专辑</div>
        <div class="tiem heartxt">时长</div>
      </div>
      <div class="tbody">
        <div
          
          v-for="(item, index) in store.getlist()"
          :class="[index % 2 ? 'bc' : '',item.fee === 1?'vip':'titem']"
          :key="index"

        >
          <div class="sortitem txt">
            {{ store.getindexs("get") * 20 + index + 1 }}
          </div>
          <div
            class="iconbofang"
            @mouseover="iconchange(true, 'b')"
            @mouseout="iconchange(false, 'b')"
          >
            <svg class="icon" aria-hidden="true" style="width: 25px" @click="paly(item)">
              <use :xlink:href="data.iconbofang"></use>
            </svg>
          </div>
          <div class="songnameitem txt">
            <span class="txtname">{{ item.name }}</span>
            

            <svg
              class="icon"
              aria-hidden="true"
              style="width: 20px"
              v-if="item.mv"
            >
              <use xlink:href="#icon-MVS"></use>
            </svg>

        


            <svg 
              class="icon"
              aria-hidden="true"
              style="width: 20px"
              v-if="item.fee === 1"
            >
              <use xlink:href="#icon-VIP"></use>
            </svg>

          </div>

          <div class="airnameitem txt">
            <span v-for="items in item.ar">{{ items.name }}/</span>
          </div>
          <div class="zuanjiitem txt">{{ item.al.name }}</div>
          <div class="tiemitem txt">{{ formatTime(item.dt) }}</div>

          <div class="icontime">
            <svg
              class="icon"
              aria-hidden="true"
              style="width: 20px"
              @mouseover="iconchange(true, 'z')"
              @mouseout="iconchange(false, 'z')"
            >
              <use :xlink:href="data.iconadd"></use>
            </svg>
            <svg
              class="icon"
              aria-hidden="true"
              style="width: 25px"
              @mouseover="iconchange(true, 's')"
              @mouseout="iconchange(false, 's')"
            >
              <use :xlink:href="data.iconshouchang"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="tfoot">
        <div class="tfootindex" @click="altered('left')">&lt;</div>
        <div
          class="tfootindex"
          v-for="(item, index) in store.getnumber()"
          :key="index"
          @click="change(index)"
          :class="index === store.getindexs('get') ? 'xuanzhong' : ''"
        >
          {{ index + 1 }}
        </div>
        <div class="tfootindex" @click="altered('right')">&gt;</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useTop } from "../store/index";
const store = useTop();
const data = reactive({
  data: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  iconbofang: "#icon-bofang-copy",
  iconadd: "#icon-tianjiaadd142-copy",
  iconshouchang: "#icon-shoucang",

});

const paly = (item) => {
  store.getpaly(item)
  
};

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}
onMounted(() => {});
const change = (index: number) => {
  store.getindexs("set", index);
};
const altered = (str: string) => {
  if (str === "left" && store.getindexs("get") != 0) {
    store.getindexs("reduce");
  } else if (
    str === "right" &&
    store.getindexs("get") != store.getnumber() - 1
  ) {
    store.getindexs("add");
  }
};

const iconchange = (bool: boolean, str: string) => {
  if (str === "b") {
    data.iconbofang = bool ? "#icon-bofang" : "#icon-bofang-copy";
  }
  if (str === "z") {
    data.iconadd = bool ? "#icon-tianjiaadd142" : "#icon-tianjiaadd142-copy";
  }
  if (str === "s") {
    data.iconshouchang = bool ? "#icon-shoucang-copy" : "#icon-shoucang";
  }

};
</script>

<style lang="less" scoped>
.box-card {
  margin-top: 20px;
  border-radius: 14px;

  .hear {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .text {
      .title {
        font-size: 20px;
        font-weight: 700;
      }

      .number {
        font-size: 12px;
        color: #909090;
        margin-left: 20px;
      }
    }

    .but {
      display: flex;

      .bofang {
        background-color: rgb(240, 50, 80);
        cursor: pointer;
        width: 115px;
        height: 30px;
        border-radius: 20px;
        position: relative;
        margin-right: 20px;

        .icon {
          position: absolute;
          top: -2px;
          left: 10px;
        }

        .txt {
          position: absolute;
          color: #ffff;
          top: 5px;
          left: 35px;
          font-size: 14px;
        }
      }

      .shouchang {
        background-color: #f0f0f0;
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 20px;
        position: relative;
        margin-right: 20px;

        .icon {
          position: absolute;
          top: -2px;
          left: 10px;
        }

        .txt {
          position: absolute;
          font-size: 14px;
          top: 6px;
          left: 30px;
        }
      }
    }
  }

  .table {
    margin-top: 20px;
    padding: 0 10px;
    .thear {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding-bottom: 15px;
      .sort {
        width: 80px;
        flex-shrink: 0;
      }

      .songname {
        width: 100%;
      }

      .airname {
        width: 100%;
      }

      .zuanji {
        width: 100%;
      }

      .tiem {
        width: 100px;
        flex-shrink: 0;
        text-align: right;
      }

      .heartxt {
        font-size: 14px;
        color: #909090;
        font-weight: 700;
      }
    }

    .tbody {
      .bc {
        background-color: #f8f8f8;
      }
      .vip{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        .txt{
          font-size: 14px;
          color: rgb(240, 50, 80);
        }
        .icontime{
          display: none;
        }
       
        .sortitem {
          width: 80px;
          flex-shrink: 0;
        }
        .iconbofang {
          display: none;
          width: 80px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .songnameitem {
          display: flex;
          width: 100%;
          .txtname{
            line-height: 50px;
            overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow:ellipsis;
          }
          .icon{
            margin: 10px 20px;
            cursor: pointer;
          }
       
        }

        .airnameitem {
          width: 100%;
        }

        .zuanjiitem {
          width: 100%;
        }

        .tiemitem {
          width: 100px;
          flex-shrink: 0;
          text-align: right;
        }
        
      }

      .titem:hover {
        background-color: #f0f0f0;
        .iconbofang {
          display: block;
        }
        .icontime {
          display: block;
        }
        .tiemitem {
          display: none;
        }
        .sortitem {
          display: none;
        }
      }
      .titem {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        .sortitem {
          width: 80px;
          flex-shrink: 0;
        }
        .iconbofang {
          display: none;
          width: 80px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .songnameitem {
          display: flex;
          width: 100%;
          .txtname{
            line-height: 50px;
            white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow:ellipsis;
            
          }
          .icon{
            margin: 10px 20px;
            cursor: pointer;
          }
        }

        .airnameitem {
          width: 100%;
        }

        .zuanjiitem {
          width: 100%;
        }

        .tiemitem {
          width: 100px;
          flex-shrink: 0;
          text-align: right;
        }
        .icontime {
          display: none;

          width: 100px;
          flex-shrink: 0;
          text-align: right;
          .icon {
            margin: 0 5px;
          }
        }

        .txt {
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
      }
    }
    .tfoot {
      display: flex;
      // width: 200px;
      flex-flow: row nowrap;
      justify-content: start;
      margin: 40px 0 20px 0;
      .tfootindex {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
      }
      .xuanzhong {
        color: rgb(47, 121, 182);
        font-size: 16px;
      }
      .tfootindex:hover {
        color: rgb(47, 121, 182);
      }
    }
  }
}
</style>
