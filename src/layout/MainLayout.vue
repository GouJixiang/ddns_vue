<template>
  <n-layout class="h-full">
    <n-layout-header
      class="top-0 z-10 h-12 overflow-hidden"
      position="absolute"
      bordered>
      <n-space justify="space-between" class="items-center h-full">
        <div class="logo-div flex items-center pl-6">
          <img src="/vite.svg" alt="DDNS-IPV6" />
          <div class="text-center pl-2">
            <h1 class="title">DDNS 动态域名解析<span>（Go版）</span></h1>
          </div>
        </div>
        <div></div>
        <div class="pr-6 flex items-center">
          <a
            href="https://ipw.cn/ipv6webcheck/?site=ipw.cn"
            title="本站支持IPv6访问"
            target="_blank">
            <img
              style="display: inline-block; vertical-align: middle"
              alt="本站支持IPv6访问"
              src="https://static.ipw.cn/icon/ipv6-s1.svg" />
          </a>
          <n-button
            tag="a"
            href="http://43.136.217.196"
            target="_blank"
            quaternary
            type="primary">
            QT-MBox
          </n-button>
          <n-button
            tag="a"
            href="https://github.com/GouJixiang"
            target="_blank"
            quaternary
            type="primary">
            Github
          </n-button>
          <n-switch v-model:value="active" @update:value="handleUpdateValue">
            <template #checked> 深色 </template>
            <template #unchecked> 浅色 </template>
          </n-switch>
        </div>
      </n-space>
    </n-layout-header>
    <n-layout-content class="mb-12 mt-12 p-4" :native-scrollbar="false">
      <router-view />
    </n-layout-content>
    <n-layout-footer
      class="bottom-0 h-12 z-10 text-center"
      position="absolute"
      bordered>
      <n-el tag="span" class="text-el"
        >Copyright &copy; occn.top 2022 | All right reserved
      </n-el>
      <br />
      <n-el tag="span" class="text-el">欲买桂花同载酒，终不似，少年游</n-el>
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { themeStore } from '@/store/theme'

const theme = themeStore()
const active = ref<boolean>(theme.isLightTheme())

/**
 * 主题切换按钮的切换方法
 * @param value
 */
const handleUpdateValue = (value: boolean) => {
  theme.setTheme(value)
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

.descriptions {
  font-size: 12px;
}

.text-el {
  color: var(--primary-color);
  transition: 0.3s var(--cubic-bezier-ease-in-out);
}
</style>
