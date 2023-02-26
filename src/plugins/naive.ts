import { App } from 'vue'
import {
  create,
  NConfigProvider,
  NGlobalStyle,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NWatermark,
  NGrid,
  NGi,
  NSpace,
  NSwitch,
  NIcon,
  NDivider,
  NEl,
  NAlert,
  NSteps,
  NStep,
  NForm,
  NFormItem,
  NInput,
  NCard,
  NLoadingBarProvider,
  NModal,
  NSelect
} from 'naive-ui'

const naive = create({
  components: [
    NConfigProvider,
    NGlobalStyle,
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NWatermark,
    NGrid,
    NGi,
    NSpace,
    NSwitch,
    NIcon,
    NDivider,
    NEl,
    NAlert,
    NSteps,
    NStep,
    NForm,
    NFormItem,
    NInput,
    NCard,
    NLoadingBarProvider,
    NModal,
    NSelect
  ]
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}
