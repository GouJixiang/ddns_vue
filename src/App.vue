<template>
  <n-config-provider :theme="themeStore().getTheme">
    <n-loading-bar-provider container-style="position: absolute;">
      <n-watermark
        content="occn.top"
        cross
        fullscreen
        :font-size="16"
        :line-height="16"
        :width="384"
        :height="384"
        :x-offset="12"
        :y-offset="60"
        :rotate="-15" />
      <main-layout />
      <n-global-style />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { themeStore } from '@/store/theme'
import MainLayout from '@/layout/MainLayout.vue'
</script>
<style scoped></style>
