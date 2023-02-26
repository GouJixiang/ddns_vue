<template>
  <n-modal :show="showModal">
    <n-card
      role="dialog"
      aria-modal="true"
      :style="bodyStyle"
      title="界面设置"
      :bordered="false"
      size="huge"
    >
      <n-p>主题设置</n-p>
      <n-select
        v-model:value="themeValue"
        :options="themeOptions"
        @update:value="handleUpdateTheme"
      />
      <template #footer>
        <n-button
          style="float: right"
          type="primary"
          @click="emits('updateShowModal', false)"
          >关闭</n-button
        >
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useDesignSettingStore } from '@/store/modules/designSetting'

const props = defineProps<{
  showModal: boolean
}>()
const emits = defineEmits(['updateShowModal'])

/** 模态框设置 */
const { showModal } = toRefs(props)
const bodyStyle = {
  width: '600px'
}

/** 主题设置 */
const designSettingStore = useDesignSettingStore()
let themeOptions = [
  {
    label: '浅色',
    value: 1
  },
  {
    label: '深色',
    value: 2
  }
]
const themeValue = computed(() => {
  return designSettingStore.darkTheme ? 2 : 1
})
const handleUpdateTheme = (themeValue: number) => {
  switch (themeValue) {
    case 1:
      designSettingStore.darkTheme = false
      break
    case 2:
      designSettingStore.darkTheme = true
  }
}
</script>

<style scoped lang="scss"></style>
