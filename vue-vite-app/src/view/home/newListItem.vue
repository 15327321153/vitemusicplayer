<template>
  <div class="newbody"> 
    <div class="newitem" v-for="item in 12">
        <div class="left">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <div class="right">
            <div class="title">认真的雪</div>
            <div class="name">薛之谦</div>
            <div class="tips">new</div>
        </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.newbody{
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
    margin-top: 30px;
    
    .newitem{
        cursor:pointer;
        border-radius: 10px;
        width: 23%;
        height: 120px;
        margin: 10px 0;
        display: flex;
        background-color: rgb(240,240,240);
        .left{
            display: block;
            height: 100%;
            img{
                height:100%;
                border-radius: 10px;
            }
        }
        .right{
            position: relative;
            flex: 2;
            overflow: hidden;
            .title{
                padding: 15% 20px 10px 20px;
                font-size: 16px;
            }
            .name{
                font-size: 14px;
                color: rgb(61, 61, 61);
                padding: 0 20px 10px 20px;
            }
            .tips{
                position: absolute;
                top: 5px;
                right: -30px;
                width: 100px;
                line-height: 24px;
                font-size: 12px;
                transform: rotate(45deg);
                text-align: center;
                color: #fff;
                background-color: rgb(250,50,80);
               
            }

        }

    }
    .newitem:hover{
        .title{
                color: rgb(250,50,80);
                padding: 15% 20px 10px 20px;
                font-size: 16px;
            }
    }
}

</style>