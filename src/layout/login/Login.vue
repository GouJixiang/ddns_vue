<template>
  <div class="login-container">
    <div class="box">
      <div class="title-box">
        <img src="/vite.svg" />
        <h1>动态域名配置工具</h1>
      </div>
      <div class="components-box">
        <!-- 功能 -->
        <config-panel v-if="isFirstOpen" />
        <login-component v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfigPanel from '@/components/login/ConfigPanel.vue'
import LoginComponent from '@/components/login/LoginComponent.vue'

// 是否是第一次打开系统
const isFirstOpen = ref<boolean>(true)
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: calc(100vh - 8rem);
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title-box {
      text-align: center;
      img {
        height: 60px;
        margin: 0 auto;
      }
      h1 {
        font-size: 36px;
        font-weight: bold;
        color: cadetblue;
      }
    }
  }
}
</style>
