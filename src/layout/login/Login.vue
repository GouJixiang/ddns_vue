<template>
  <!-- 搞个页头 -->
  <div class="w-full">
    <n-space justify="space-between" class="flex items-center">
      <div class="logo-div flex items-center pl-6">
        <img src="public/vite.svg" alt="DDNS-IPV6">
        <div class="text-center pl-2">
          <span class="title">DDNS FOR IPV6</span>
          <br>
          <span>ipv6版内网穿透方案</span>
        </div>
      </div>
      <div></div>
      <div class="pr-6">
        <n-button tag="a" href="http://43.136.217.196" target="_blank" quaternary type="primary">
          QT-MBox
        </n-button>
        <n-button quaternary type="primary">
          Github
        </n-button>
        <n-switch
            v-model:value="active"
            @update:value="handleUpdateValue"
        >
          <template #checked>
            深色
          </template>
          <template #unchecked>
            浅色
          </template>
        </n-switch>
      </div>
    </n-space>
  </div>
  <n-divider class="m-0" />
  <!-- 功能 -->
  <set-admin v-if="isFirstOpen" />
  <login-component v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SetAdmin from '@/components/login/SetAdmin.vue'
import LoginComponent from '@/components/login/LoginComponent.vue'
import { ThemeStore } from '@/store/theme'

// 是否是第一次打开系统
const isFirstOpen = ref<boolean>(true)
const themeStore = ThemeStore()
const active = ref<boolean>(themeStore.isLightTheme())
/**
 * 主题切换按钮的切换方法
 * @param value
 */
const handleUpdateValue = (value: boolean) => {
  themeStore.setTheme(value)
}
</script>

<style scoped lang="scss">
.logo-div {
  margin: 10px;

  img {
    display: inline-block;
    height: 50px;
  }
  div {
    display: inline-block;
  }
  .title {
    font-weight: bolder;
    font-size: 20px;
    font-style: italic;
    color: cornflowerblue;
  }
  .title + br + span {
    font-size: 16px;
    color: cornflowerblue;
  }
}
</style>