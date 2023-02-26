import { useOsTheme } from 'naive-ui'

export const appThemeList: string[] = [
  '#2d8cf0',
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
  '#FF3D68',
  '#00C1D4',
  '#71EFA3',
  '#171010',
  '#78DEC7',
  '#1768AC',
  '#FB9300',
  '#FC5404'
]

let darkTheme
let appTheme = '#2d8cf0'

const themeStr = localStorage.getItem('theme')
if (themeStr) {
  const themeObj = JSON.parse(themeStr)
  darkTheme = themeObj.darkTheme
  appTheme = themeObj.appTheme
} else {
  const osThemeRef = useOsTheme()
  osThemeRef.value === 'dark' ? (darkTheme = true) : (darkTheme = false)
}
const setting = {
  // 深色主题
  darkTheme,
  // 系统主题色
  appTheme,
  // 系统内置主题色列表
  appThemeList
}

export default setting
