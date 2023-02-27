<template>
  <n-layout class="h-full">
    <n-layout-header
      class="top-0 z-10 h-12 overflow-hidden"
      position="absolute"
      bordered
    >
      <n-space justify="space-between" class="items-center h-full">
        <div class="logo-div flex items-center pl-6">
          <img src="/vite.svg" alt="DDNS-IPV6" />
          <div class="text-center pl-2">
            <h1 class="title">DDNS 动态域名解析<span>（Go版）</span></h1>
          </div>
        </div>
        <div></div>
        <div id="right-header" class="pr-6 flex items-center">
          <a
            href="https://ipw.cn/ipv6webcheck/?site=ipw.cn"
            title="本站支持IPv6访问"
            target="_blank"
            ><img
              style="display: inline-block; vertical-align: middle"
              alt="本站支持IPv6访问"
              src="https://static.ipw.cn/icon/ipv6-s4.svg"
          /></a>
          <n-button
            tag="a"
            href="http://43.136.217.196"
            target="_blank"
            text
            type="primary"
          >
            QT-MBox
          </n-button>
          <n-button
            tag="a"
            href="https://github.com/GouJixiang"
            target="_blank"
            text
            type="primary"
          >
            Github
          </n-button>
          <n-button
            text
            style="font-size: 20px"
            @click="showSettings = !showSettings"
          >
            <n-icon :color="useDesignSettingStore().appTheme">
              <SettingsIcon />
            </n-icon>
          </n-button>
        </div>
      </n-space>
    </n-layout-header>
    <n-layout-content class="mb-12 mt-12 p-4" :native-scrollbar="false">
      <router-view />
    </n-layout-content>
    <n-layout-footer
      class="bottom-0 h-16 z-10 text-center"
      position="absolute"
      bordered
    >
      <n-el
        tag="a"
        class="text-el"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >陕ICP备2023001751号</n-el
      >
      <br />
      <n-el tag="span" class="text-el">Copyright &copy; Occn.top 2023</n-el>
      <br />
      <n-el tag="span" class="text-el">欲买桂花同载酒，终不似，少年游</n-el>
    </n-layout-footer>
  </n-layout>
  <!-- 设置模态框 -->
  <LayoutSetting
    :show-modal="showSettings"
    @update-show-modal="updateShowModal"
  />
</template>

<script setup lang="ts">
import { SettingsOutline as SettingsIcon } from '@vicons/ionicons5'
import { ref } from 'vue'
import LayoutSetting from '@/components/system/LayoutSetting.vue'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const showSettings = ref<boolean>(false)
const updateShowModal = (value: boolean) => {
  showSettings.value = value
}
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  font-weight: bold;
  color: cadetblue;

  span {
    color: rgb(232 128 128);
  }
}

#right-header {
  & > * {
    margin: 0 10px;
  }
}

.descriptions {
  font-size: 12px;
}

.text-el {
  color: var(--primary-color);
  transition: 0.3s var(--cubic-bezier-ease-in-out);
}
</style>
