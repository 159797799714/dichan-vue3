<template>
  <!-- 提现优惠劵 -->
  <div class="rectangle_447">
    <a class="item" @click="goPage({ name: 'applyNow' })">
      <div class="item_t">
        <div>中国地产提现免费券100万额度</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img src="@/assets/image/apply/20230321214219.png" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免100万提现额度的手续费，可拆分使用。
      </div>
    </a>
    <a class="item" @click="goPage({ name: 'applyNow' })">
      <div class="item_t">
        <div>中国地产提现免费券500万额度</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img src="@/assets/image/apply/20230321214126.png" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免500万提现额度的手续费，可拆分使用。
      </div>
      <!--                <div class="item_b">-->
      <!--                    <div>-->
      <!--                        <div>申请进度</div>-->
      <!--                        <div>23.00%</div>-->
      <!--                    </div>-->
      <!--                    <div class="progress">-->
      <!--                        <div class="jindu" style="width:23.00%"></div>-->
      <!--                    </div>-->
      <!--                </div>--> </a
    ><a class="item" @click="goPage({ name: 'applyNow' })">
      <div class="item_t">
        <div>中国地产提现免费券1000万额度</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img src="@/assets/image/apply/20230321214055.png" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免1000万提现额度的手续费，可拆分使用。
      </div>
      <!--                <div class="item_b">-->
      <!--                    <div>-->
      <!--                        <div>申请进度</div>-->
      <!--                        <div>23.00%</div>-->
      <!--                    </div>-->
      <!--                    <div class="progress">-->
      <!--                        <div class="jindu" style="width:23.00%"></div>-->
      <!--                    </div>-->
      <!--                </div>--> </a
    ><a class="item" @click="goPage({ name: 'applyNow' })">
      <div class="item_t">
        <div>中国地产提现免费券3000万额度</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img src="@/assets/image/apply/20230321213955.png" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免3000万提现额度的手续费，可拆分使用。
      </div>
      <!--                <div class="item_b">-->
      <!--                    <div>-->
      <!--                        <div>申请进度</div>-->
      <!--                        <div>23.00%</div>-->
      <!--                    </div>-->
      <!--                    <div class="progress">-->
      <!--                        <div class="jindu" style="width:23.00%"></div>-->
      <!--                    </div>-->
      <!--                </div>--> </a
    ><a class="item" @click="goPage({ name: 'applyNow' })">
      <div class="item_t">
        <div>中国地产提现免费券5000万额度</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img src="@/assets/image/apply/20230321213908.png" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免5000万提现额度的手续费，可拆分使用。
      </div>
      <!--                <div class="item_b">-->
      <!--                    <div>-->
      <!--                        <div>申请进度</div>-->
      <!--                        <div>23.00%</div>-->
      <!--                    </div>-->
      <!--                    <div class="progress">-->
      <!--                        <div class="jindu" style="width:23.00%"></div>-->
      <!--                    </div>-->
      <!--                </div>-->
    </a>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

const props = defineProps({
  couponList: {
    type: Array,
    default: () => ['', '']
  }
})
</script>

<style lang="scss" scoped></style>
