<template>
  <n-dialog-provider>
    <n-notification-provider>
      <n-message-provider>
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
