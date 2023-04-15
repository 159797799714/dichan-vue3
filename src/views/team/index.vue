<template>
  <div class="mobile">
    <div style="height: 3.9rem">
      <img src="@/assets/image/team/team_bg.png" />
    </div>
    <div class="team">
      <div class="rectangle_357">
        <div class="t_head">总体数据</div>
        <div class="t_data">
          <div>
            <div>累计收益</div>
            <div>¥&nbsp;<span>{{ taemInfo.total_profit }}</span></div>
          </div>
          <div>
            <div>团队人数</div>
            <div><span>{{ taemInfo.team_people }}</span>人</div>
          </div>
        </div>
      </div>
      <div class="rectangle_360">
        <div class="t_head">
          <div class="jr">今日数据</div>
          <div>}</div>
          <div>
            今日新增:&nbsp;<span>{{ taemInfo.today_people }}</span>人&nbsp;
            <!--团队申请:&nbsp;<span>72800</span>-->
          </div>
        </div>
        <div class="t_data">
          <p>团队信息</p>
          <div>总人数{{ taemInfo.team_people }}人，已申请{{ taemInfo.apple_people }}人</div>
        </div>
      </div>
      <div class="rectangle_444">
        <template v-if="teamList.length">
          <div v-for="item in teamList" :key="index" class="row">
            <div>{{ item.mobile }}</div>
            <div style="color: #4f7cf3">{{ levelObj[item.level] }}</div>
            <div>申请&nbsp;<span style="color: #000">¥ {{ item.money }}</span></div>
          </div>
        </template>
        <template v-else-if="hadLoad">
          <div class="blank">暂无数据</div>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const levelObj = {
  1: '一级',
  2: '二级',
  3: '三级'
}
const hadLoad = ref(false)

const taemInfo = ref({})
const teamList = ref([])
// 项目分类列表
const getTeam = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetTeam')
  console.log('团队', data)

  hadLoad.value = true

  taemInfo.value = data || {}
  teamList.value = data.list || []
}

getTeam()
</script>

<style lang="scss" scoped>
.blank {
  text-align: center;
}
</style>
