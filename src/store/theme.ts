import { defineStore } from 'pinia'
import { darkTheme, useOsTheme } from 'naive-ui'

const osThemeRef = useOsTheme()

export const ThemeStore = defineStore('theme', {
    state: () => {
        return {
            theme: null
        }
    },
    getters: {
        getTheme: (state) => {
            // 从浏览器缓存中获取主题信息
            if (localStorage.getItem("theme")) {
                let localTheme = localStorage.getItem("theme")
                switch (localTheme) {
                    case 'light':
                        state.theme = null
                        break
                    case 'dark':
                        // @ts-ignore
                        state.theme = darkTheme
                        break
                    default:
                        state.theme = null
                }
            } else {
                // @ts-ignore
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
        setTheme(isLightTheme : boolean) {
            if (isLightTheme) {
                this.theme = null
                localStorage.setItem("theme", "light")
            } else {
                // @ts-ignore
                this.theme = darkTheme
                localStorage.setItem("theme", "dark")
            }
        },
        /**
         * 返回当前主题是否是浅色主题
         */
        isLightTheme() : boolean {
            return this.theme == null
        }
    }
})