<template>
  <div class="">
    <div class="packet">
        <form action="https://71yunduan.com/user/red_packets.html" method="post" id="ifr">
        <div class="card">
            <div class="title">红包兑换可提余额</div>
            <div class="red_input">
                <img src="@/assets/image/user/slice_166.png" style="height:.64rem">
                <input name="money" id="money" placeholder="请输入">
                <span id="all">全部兑换</span>
            </div>
            <p class="hit">当前可用现金2888.00， 可以兑换可提余额2888.00元。(工作日)10:00-17:00可申请兑换</p>
            <div class="show_money">可兑换金额2888.00元</div>
            <input type="hidden" id="xjhb" value="2888.00">
            <!--<div class="btn">兑换</div>-->
            <input type="submit" value="兑换" class="input_btn">
        </div>
        </form>
        <div class="red_record">
            <div>最近兑换记录</div>
                    </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>

</style>
