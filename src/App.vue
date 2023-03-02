<template>
  <NConfigProvider :theme="getDarkTheme" :theme-overrides="getThemeOverrides">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AppProvider } from '@/components/Application'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import { lighten } from '@/utils/index'
import { darkTheme } from 'naive-ui'
import LoadingPanel from '@/components/system/LoadingPanel.vue'

const designStore = useDesignSettingStore()
const getThemeOverrides = computed(() => {
  const appTheme = designStore.appTheme
  const lightenStr = lighten(designStore.appTheme, 6)
  return {
    common: {
      primaryColor: appTheme,
      primaryColorHover: lightenStr,
      primaryColorPressed: lightenStr,
      primaryColorSuppl: appTheme
    },
    LoadingBar: {
      colorLoading: appTheme
    }
  }
})
const getDarkTheme = computed(() =>
  designStore.darkTheme ? darkTheme : undefined
)

/** 监听样式变化，并存储到浏览器 */
designStore.$subscribe(() => {
  localStorage.setItem('theme', JSON.stringify(designStore.$state))
})
</script>
<style scoped></style>
