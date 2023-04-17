<template>
  <div class="layout">
    <div class="layout-content">
      <div class="main-cont">
        <RouterView></RouterView>
      </div>
    </div>
    <div class="footer_nav">
      <div
        class="nav_li"
        v-for="(item, index) in navList"
        :key="index"
        @click="goPage(item, index)"
      >
        <img v-if="activeIndex === index" :src="activeIcon" />
        <img v-else :src="item.icon" />
        <span :class="{ active: activeIndex === index }">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

import { getAssetsFiles } from '@/utils/index'

import homeIcon from '@/assets/image/tabbar/home.png'
import kefuIcon from '@/assets/image/tabbar/kefu.png'
import applyIcon from '@/assets/image/tabbar/apply.png'
import teamIcon from '@/assets/image/tabbar/team.png'
import userIcon from '@/assets/image/tabbar/user.png'

import homeIconBlue from '@/assets/image/tabbar/home_blue.png'
import kefuIconBlue from '@/assets/image/tabbar/kefu_blue.png'
import applyIconBlue from '@/assets/image/tabbar/apply_blue.png'
import teamIconBlue from '@/assets/image/tabbar/team_blue.png'
import userIconBlue from '@/assets/image/tabbar/user_blue.png'

const navList = [
  {
    name: '首页',
    iconName: 'home',
    // icon: getAssetsFiles('../assets/image/tabbar/home.png'),
    icon: homeIcon,
    activeIcon: homeIconBlue,
    pathName: 'home'
  },
  {
    name: '客服',
    iconName: 'kefu',
    // icon: getAssetsFiles('../assets/image/tabbar/kefu.png'),
    icon: kefuIcon,
    activeIcon: kefuIconBlue,
    pathName: 'kefu'
  },
  {
    name: '申请',
    iconName: 'apply',
    // icon: getAssetsFiles('../assets/image/tabbar/apply.png'),
    icon: applyIcon,
    activeIcon: applyIconBlue,
    pathName: 'apply'
  },
  {
    name: '团队',
    iconName: 'team',
    // icon: getAssetsFiles('../assets/image/tabbar/team.png'),
    icon: teamIcon,
    activeIcon: teamIconBlue,
    pathName: 'team'
  },
  {
    name: '我的',
    iconName: 'user',
    // icon: getAssetsFiles('../assets/image/tabbar/user.png'),
    icon: userIcon,
    activeIcon: userIconBlue,
    pathName: 'user'
  }
]
const activeIndex = ref(0)
const activeIcon = shallowRef(homeIconBlue)
// const activeIcon = shallowRef(getAssetsFiles('../assets/image/tabbar/home_blue.png'))

const route = useRoute()
// 监听路由变化
watch(
  () => route.name,
  (val) => {
    console.log('tab首页监听到路由变化了', val)
    const index = navList.findIndex((item) => item.iconName === val)
    console.log('index---', index)
    activeIndex.value = index
    if (index === -1) return
    activeIcon.value = navList[index].activeIcon
  },
  {
    immediate: true
  }
)

const router = useRouter()
const goPage = (item, index) => {
  activeIndex.value = index
  activeIcon.value = item.activeIcon
  router.push({ name: item.pathName })
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-content {
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
  }

  .main-cont {
    padding-bottom: calc(1rem + constant(safe-area-inset-bottom));
    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  }
}
</style>
