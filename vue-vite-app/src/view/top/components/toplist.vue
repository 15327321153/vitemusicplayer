<template>
    <div class="bodys">

        <div class="bar">
            <div class="baritem"></div>
            <div class="baritem"></div>
            <div class="baritem"></div>
        </div>
<br>
        <div class="con">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<script lang='ts' setup>

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
        }


    }
    .con{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .item{
            width: 215px;
            height: 62px;
            background-color: #ffffff;
            border-radius: 14px;
            box-shadow: 0 0 20px 0 rgba(196, 196, 196, 0.5);
            margin: 10px 0;
        }
    }
}
</style>