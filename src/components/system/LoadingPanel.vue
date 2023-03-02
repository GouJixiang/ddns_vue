<template>
  <div v-if="loadingPanel" class="loading-panel">
    <n-result
      class="result"
      status="500"
      title="提醒"
      description="当前版本仅为UI预览，不支持远程配置客户端"
    >
      <template #footer>
        <n-button @click="loadingPanel = false">开始预览</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const theme = useDesignSettingStore()
const loadingPanel = ref<boolean>(true)
let backgroundColor = theme.getDarkTheme
  ? 'rgba(0, 0, 0, 0.9)'
  : 'rgba(255,255,255,0.9)'
</script>

<style scoped lang="scss">
.loading-panel {
  position: absolute;
  z-index: 100;
  height: 100vh;
  background-color: v-bind(backgroundColor);
  width: 100%;

  .result {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
