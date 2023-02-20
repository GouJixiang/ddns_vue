import { defineStore } from 'pinia'
import { darkTheme, useOsTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

interface Theme {
  theme: null | GlobalTheme
}

const osThemeRef = useOsTheme()

export const themeStore = defineStore('theme', {
  state: (): Theme => ({
    theme: null
  }),
  getters: {
    getTheme: (state) => {
      // 从浏览器缓存中获取主题信息
      if (localStorage.getItem('theme')) {
        const localTheme = localStorage.getItem('theme')
        switch (localTheme) {
          case 'light':
            state.theme = null
            break
          case 'dark':
            state.theme = darkTheme
            break
          default:
            state.theme = null
        }
      } else {
        state.theme = osThemeRef.value === 'dark' ? darkTheme : null
      }
      return state.theme
    }
  },
  actions: {
    /**
     * 设置主题
     * @param isLightTheme 是否浅色主题
     */
    setTheme(isLightTheme: boolean) {
      if (isLightTheme) {
        this.theme = null
        localStorage.setItem('theme', 'light')
      } else {
        this.theme = darkTheme
        localStorage.setItem('theme', 'dark')
      }
    },
    /**
     * 返回当前主题是否是浅色主题
     */
    isLightTheme(): boolean {
      return this.theme == null
    }
  }
})
