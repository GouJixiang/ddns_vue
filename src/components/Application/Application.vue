<template>
  <n-dialog-provider>
    <n-notification-provider>
      <n-message-provider>
        <n-watermark
          content="陕ICP备 2023001751号"
          cross
          fullscreen
          :font-size="16"
          :line-height="16"
          :width="384"
          :height="384"
          :x-offset="12"
          :y-offset="60"
          :rotate="-15"
          :z-index="10000"
        />
        <MainLayout>
          <slot name="default"></slot>
        </MainLayout>
      </n-message-provider>
    </n-notification-provider>
  </n-dialog-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider
} from 'naive-ui'
import MainLayout from '@/layout/MainLayout.vue'

export default defineComponent({
  name: 'Application',
  components: {
    MainLayout,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider
  },
  setup() {
    return {}
  }
})
</script>
