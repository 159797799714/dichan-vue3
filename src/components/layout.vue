<template>
  <div class="layout">
    <div class="layout-content">
      <RouterView></RouterView>
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

const navList = [
  {
    name: '首页',
    iconName: 'home',
    icon: getAssetsFiles('../assets/image/tabbar/home.png'),
    pathName: 'home'
  },
  {
    name: '客服',
    iconName: 'kefu',
    icon: getAssetsFiles('../assets/image/tabbar/kefu.png'),
    pathName: 'kefu'
  },
  {
    name: '申请',
    iconName: 'apply',
    icon: getAssetsFiles('../assets/image/tabbar/apply.png'),
    pathName: 'apply'
  },
  {
    name: '团队',
    iconName: 'team',
    icon: getAssetsFiles('../assets/image/tabbar/team.png'),
    pathName: 'team'
  },
  {
    name: '我的',
    iconName: 'user',
    icon: getAssetsFiles('../assets/image/tabbar/user.png'),
    pathName: 'user'
  }
]
const activeIndex = ref(0)
const activeIcon = shallowRef(getAssetsFiles('../assets/image/tabbar/home_blue.png'))

const route = useRoute()
// 监听路由变化
watch(
  () => route.name,
  (val) => {
    console.log('tab首页监听到路由变化了', val)
    const index = navList.findIndex((item) => item.iconName === val)
    console.log('index---', index)
    activeIndex.value = index
    activeIcon.value = getAssetsFiles(`../assets/image/tabbar/${navList[index].iconName}_blue.png`)
  },
  {
    immediate: true
  }
)

const router = useRouter()
const goPage = (item, index) => {
  activeIndex.value = index
  activeIcon.value = getAssetsFiles(`../assets/image/tabbar/${item.iconName}_blue.png`)
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
}
</style>
