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
    ]
})

export default naive;