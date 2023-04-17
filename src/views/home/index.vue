<template>
  <div class="main">
    <div class="banner">
      <van-swipe :autoplay="false" lazy-render>
        <van-swipe-item v-for="(item, index) in swiperList" :key="index">
          <video
            :src="item.video"
            controls="controls"
            style="object-fit: cover"
            x5-playsinline=""
            playsinline="true"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen=""
            x5-video-orientation="portraint"
            class="video-item"
          ></video>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="indexnav" style="padding: 0.3rem 0">
      <a @click="goPage({ name: 'aboutUs' })"
        ><img src="@/assets/image/index/nav9.png" />
        <font>关于我们</font>
      </a>
      <a @click="goPage({ name: 'share' })"
        ><img src="@/assets/image/index/nav8.png" />
        <font>邀请好友</font>
      </a>
      <a :href="config.app_download_url"
        ><img src="@/assets/image/index/nav10.png" />
        <font>APP下载</font>
      </a>
      <a @click="goPage({ name: 'sign' })"
        ><img src="@/assets/image/index/nav4.png" />
        <font>签到有礼</font>
      </a>
      <a @click="goPage({ name: 'recharge' })"
        ><img src="@/assets/image/index/nav5.png" />
        <font>在线充值</font>
      </a>
    </div>
    <!-- 公告 -->
    <div class="marquee_outer">
      <img src="@/assets/image/index/notice.png" />
      <div class="marquee_txt" v-html="notice"> </div>
    </div>
    <!-- 活动 -->
    <div class="activity" style="display: flex; margin: 0 0.2rem; gap: 0.3rem; column-gap: 0.3rem">
      <a @click="goPage({ name: 'peopleSafeguard' })" class="index_img">
        <img :src="config.index_ensure_image" />
        <!-- <img src="@/assets/image/index/activity1.png" /> -->
      </a>
      <a @click="goPage({ name: 'sign' })" class="index_img">
        <img :src="config.index_signin_image" />
        <!-- <img src="@/assets/image/index/qd.png" /> -->
      </a>
    </div>
    <!-- 民生资讯 -->
    <div class="consult">
      <div class="consult_head">民生资讯</div>
      <div class="consult_list">
        <a
          v-for="(item, index) in consultList"
          :key="index"
          class="item"
          @click="goPage({ name: 'peopleInfomation', query: { id: item.id } })"
        >
          <div class="item_left">
            <p class="item_title">{{ item.title }}</p>
            <div style="display: flex; column-gap: 0.5rem; color: #999999; font-weight: 300">
              <span>{{ item.createtime }}</span>
            </div>
          </div>
          <div class="item_right">
            <img :src="item.image" />
          </div>
        </a>
      </div>
    </div>

    <!-- 弹窗 -->
    <div v-show="popShow" class="popup">
      <div class="popup_box" style="height: 9rem; overflow-y: scroll; padding-bottom: 0.5rem">
        <div class="popup_close" @click="popShow = false">
          <svg
            t="1675419453046"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2663"
            height="0.5rem"
            width="0.5rem"
          >
            <path
              d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z"
              p-id="2664"
              fill="#999999"
            ></path>
            <path
              d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z"
              p-id="2665"
              fill="#999999"
            ></path>
          </svg>
        </div>
        <div class="popup_content" v-html="popContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useRouteHook } from '@/hook/routeHook'
const { goPage } = useRouteHook()

import { useConfigStore } from '@/store/config'
const configStore = useConfigStore()
const config = ref({})

const swiperList = ref([])

const showToast = () => {
  $base.showToast('升级中')
}

// 首页轮播
const getSwiper = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetBannerList')
  console.log('首页轮播', data)
  swiperList.value = data || []
}

const consultList = ref([])
const notice = ref('')
// 民生资讯列表
const getConsult = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetNewsList', {
    type: 1,
    page: 1,
    page_size: 5
  })
  console.log('民生资讯列表', data)
  const list = data.list || []
  list.map((item) => (item.createtime = $base.DateFormat(item.createtime, 'MM-dd')))

  consultList.value = list

  if (!list.length) return
  const detail = await getNewsDetail(list[0].id)
  notice.value = `<marquee scrollamount="3" hspace="20">
          <a>${detail.title || ''}</a>
        </marquee>`
}

const popShow = ref(false)
const popContent = ref('')
// 弹窗公告列表
const getPopContent = async () => {
  if (sessionStorage.getItem('hadPop')) return
  $base.showLoadingToast()
  let data = await $Http('apiGetNewsList', {
    type: 2,
    page: 1,
    page_size: 1
  })
  console.log('弹窗公告列表', data)
  const list = data.list || []
  if (!list.length) return
  const detail =  await getNewsDetail(list[0].id)
  popContent.value = detail.content
  if (popContent.value) {
    popShow.value = true
    sessionStorage.setItem('hadPop', true)
  }
}
// 详情
const getNewsDetail = async (id) => {
  $base.showLoadingToast()
  let data = await $Http('apiFindNewsDetails', { id })
  console.log('弹窗公告详情', data)

  return data || {}
}

const init = async () => {
  getPopContent()
  getSwiper()
  getConsult()
  config.value = await configStore.getConfig()
}

init()
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 1rem;
}

.banner,
.video-item {
  height: 4.4rem;
  width: 100%;
}

.indexnav {
  margin-top: 0.2rem;
}

.item_left {
  flex: 1;
}

.item_right {
  max-width: 4rem;
}

.index_img {
  height: 3.2rem;
  width: 100%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: auto;
  }
}

.popup_box {
  position: relative;

  .icon {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }

  .popup_content {
    padding-top: 1rem;
  }
}
</style>
