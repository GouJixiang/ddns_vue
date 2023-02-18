<template>
  <n-config-provider :theme="ThemeStore().getTheme">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import { ThemeStore } from '@/store/theme'
</script>
<style scoped>
</style>
